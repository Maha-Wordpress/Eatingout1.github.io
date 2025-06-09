// Audio Generation System for High-Quality Pronunciation

class AudioGenerator {
    constructor() {
        this.audioCache = new Map();
        this.isGenerating = false;
        this.generationQueue = [];
        this.initializeSpeechSynthesis();
    }

    initializeSpeechSynthesis() {
        // Wait for voices to load
        if (speechSynthesis.getVoices().length === 0) {
            speechSynthesis.addEventListener('voiceschanged', () => {
                this.selectBestVoice();
            });
        } else {
            this.selectBestVoice();
        }
    }

    selectBestVoice() {
        const voices = speechSynthesis.getVoices();
        
        // Prefer high-quality English voices
        const preferredVoices = [
            'Microsoft Zira - English (United States)',
            'Microsoft David - English (United States)', 
            'Google US English',
            'Alex',
            'Samantha',
            'Karen',
            'Daniel'
        ];

        // Find the best available voice
        this.selectedVoice = null;
        for (const preferred of preferredVoices) {
            const voice = voices.find(v => v.name.includes(preferred) || v.name === preferred);
            if (voice) {
                this.selectedVoice = voice;
                break;
            }
        }

        // Fallback to any English voice
        if (!this.selectedVoice) {
            this.selectedVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
        }

        console.log('Selected voice:', this.selectedVoice?.name || 'Default');
    }

    async generateAudio(text, options = {}) {
        const cacheKey = `${text}_${JSON.stringify(options)}`;
        
        // Return cached audio if available
        if (this.audioCache.has(cacheKey)) {
            return this.audioCache.get(cacheKey);
        }

        return new Promise((resolve, reject) => {
            try {
                const utterance = new SpeechSynthesisUtterance(text);
                
                // Configure speech parameters for clarity
                utterance.voice = this.selectedVoice;
                utterance.rate = options.rate || 0.8; // Slightly slower for clarity
                utterance.pitch = options.pitch || 1.0;
                utterance.volume = options.volume || 1.0;
                
                // Create audio blob for caching
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const mediaStreamDestination = audioContext.createMediaStreamDestination();
                
                utterance.onstart = () => {
                    console.log(`Generating audio for: "${text}"`);
                };
                
                utterance.onend = () => {
                    // Cache the utterance for reuse
                    this.audioCache.set(cacheKey, utterance);
                    resolve(utterance);
                };
                
                utterance.onerror = (event) => {
                    console.error('Speech synthesis error:', event.error);
                    reject(new Error(`Speech synthesis failed: ${event.error}`));
                };
                
                // Generate the speech
                speechSynthesis.speak(utterance);
                
            } catch (error) {
                console.error('Audio generation error:', error);
                reject(error);
            }
        });
    }

    async playAudio(text, options = {}) {
        try {
            // Stop any currently playing speech
            speechSynthesis.cancel();
            
            const utterance = await this.generateAudio(text, options);
            speechSynthesis.speak(utterance);
            
            return new Promise((resolve) => {
                utterance.onend = resolve;
            });
        } catch (error) {
            console.error('Error playing audio:', error);
            throw error;
        }
    }

    stopAudio() {
        speechSynthesis.cancel();
    }

    // Generate audio for all vocabulary words
    async preloadVocabularyAudio() {
        const allWords = [];
        
        // Collect all words from vocabulary data
        Object.values(vocabularyData).forEach(section => {
            Object.values(section.categories).forEach(category => {
                category.words.forEach(wordObj => {
                    allWords.push(wordObj.word);
                    if (wordObj.definition) {
                        allWords.push(wordObj.definition);
                    }
                });
            });
        });

        // Add practice words
        allWords.push(...practiceWords);

        console.log(`Preloading audio for ${allWords.length} words...`);
        
        // Generate audio in batches to avoid overwhelming the system
        const batchSize = 5;
        for (let i = 0; i < allWords.length; i += batchSize) {
            const batch = allWords.slice(i, i + batchSize);
            await Promise.all(batch.map(word => 
                this.generateAudio(word).catch(err => 
                    console.warn(`Failed to generate audio for "${word}":`, err)
                )
            ));
            
            // Small delay between batches
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        console.log('Audio preloading complete!');
    }

    // Get available voices for user selection
    getAvailableVoices() {
        return speechSynthesis.getVoices().filter(voice => voice.lang.startsWith('en'));
    }

    // Set voice preference
    setVoice(voiceName) {
        const voices = speechSynthesis.getVoices();
        const voice = voices.find(v => v.name === voiceName);
        if (voice) {
            this.selectedVoice = voice;
            console.log('Voice changed to:', voice.name);
        }
    }

    // Generate conversation audio with multiple speakers
    async generateConversationAudio(dialogue, options = {}) {
        const conversationAudio = [];
        
        for (const line of dialogue) {
            try {
                // Vary voice characteristics for different speakers
                const speakerOptions = {
                    rate: options.rate || 0.8,
                    pitch: this.getSpeakerPitch(line.speaker),
                    volume: options.volume || 1.0
                };
                
                const utterance = await this.generateAudio(line.text, speakerOptions);
                conversationAudio.push({
                    speaker: line.speaker,
                    utterance: utterance,
                    timestamp: line.timestamp
                });
            } catch (error) {
                console.warn(`Failed to generate audio for ${line.speaker}:`, error);
            }
        }
        
        return conversationAudio;
    }

    getSpeakerPitch(speaker) {
        // Vary pitch slightly for different speakers
        const pitchMap = {
            'Host': 1.0,
            'Server': 1.1,
            'Jennifer': 1.2,
            'Sarah': 1.1,
            'Mike': 0.9,
            'Lisa': 1.15,
            'Tom': 0.85,
            'Employee': 1.0,
            'Customer': 0.95,
            'Mom': 1.1,
            'Dad': 0.9,
            'Kid 1': 1.3,
            'Kid 2': 1.25
        };
        
        return pitchMap[speaker] || 1.0;
    }

    // Play conversation with timing
    async playConversation(conversationAudio, onLineStart = null) {
        for (const line of conversationAudio) {
            if (onLineStart) {
                onLineStart(line.speaker, line.utterance.text);
            }
            
            speechSynthesis.speak(line.utterance);
            
            // Wait for the line to finish
            await new Promise(resolve => {
                line.utterance.onend = resolve;
            });
            
            // Small pause between speakers
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
}

// Create global audio generator instance
const audioGenerator = new AudioGenerator();

// Initialize audio when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Preload vocabulary audio after a short delay
    setTimeout(() => {
        audioGenerator.preloadVocabularyAudio();
    }, 1000);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AudioGenerator };
}

