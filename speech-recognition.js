// Speech Recognition System for Pronunciation Practice

class SpeechRecognitionSystem {
    constructor() {
        this.recognition = null;
        this.isRecording = false;
        this.currentWord = '';
        this.recordedAudio = null;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.initializeRecognition();
    }

    initializeRecognition() {
        // Check for speech recognition support
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
        } else if ('SpeechRecognition' in window) {
            this.recognition = new SpeechRecognition();
        } else {
            console.warn('Speech recognition not supported in this browser');
            return;
        }

        // Configure speech recognition
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';
        this.recognition.maxAlternatives = 3;

        // Set up event handlers
        this.recognition.onstart = () => {
            console.log('Speech recognition started');
            this.isRecording = true;
            this.updateRecordingUI(true);
        };

        this.recognition.onend = () => {
            console.log('Speech recognition ended');
            this.isRecording = false;
            this.updateRecordingUI(false);
        };

        this.recognition.onresult = (event) => {
            this.handleRecognitionResult(event);
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.handleRecognitionError(event.error);
        };
    }

    async startRecording(targetWord) {
        if (!this.recognition) {
            alert('Speech recognition is not supported in your browser. Please try Chrome or Edge.');
            return;
        }

        this.currentWord = targetWord.toLowerCase();
        
        try {
            // Also start audio recording for playback
            await this.startAudioRecording();
            
            // Start speech recognition
            this.recognition.start();
        } catch (error) {
            console.error('Error starting recording:', error);
            alert('Could not access microphone. Please check your permissions.');
        }
    }

    stopRecording() {
        if (this.recognition && this.isRecording) {
            this.recognition.stop();
        }
        
        if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
            this.mediaRecorder.stop();
        }
    }

    async startAudioRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];

            this.mediaRecorder.ondataavailable = (event) => {
                this.audioChunks.push(event.data);
            };

            this.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
                this.recordedAudio = URL.createObjectURL(audioBlob);
                this.enablePlaybackButton();
            };

            this.mediaRecorder.start();
        } catch (error) {
            console.error('Error accessing microphone:', error);
            throw error;
        }
    }

    handleRecognitionResult(event) {
        const results = Array.from(event.results[0]);
        const recognizedText = results[0].transcript.toLowerCase().trim();
        const confidence = results[0].confidence;

        console.log('Recognized:', recognizedText, 'Confidence:', confidence);

        // Calculate pronunciation accuracy
        const accuracy = this.calculateAccuracy(this.currentWord, recognizedText, confidence);
        
        // Provide feedback
        this.provideFeedback(recognizedText, accuracy);
    }

    calculateAccuracy(targetWord, recognizedWord, confidence) {
        // Clean up the words for comparison
        const target = targetWord.toLowerCase().replace(/[^a-z]/g, '');
        const recognized = recognizedWord.toLowerCase().replace(/[^a-z]/g, '');

        // Exact match gets highest score
        if (target === recognized) {
            return Math.min(95 + (confidence * 5), 100);
        }

        // Calculate similarity using Levenshtein distance
        const similarity = this.calculateSimilarity(target, recognized);
        
        // Combine similarity with confidence
        const baseScore = similarity * 70; // Max 70 points for similarity
        const confidenceBonus = confidence * 30; // Max 30 points for confidence
        
        return Math.round(Math.min(baseScore + confidenceBonus, 100));
    }

    calculateSimilarity(str1, str2) {
        const matrix = [];
        const len1 = str1.length;
        const len2 = str2.length;

        // Create matrix
        for (let i = 0; i <= len1; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }

        // Fill matrix
        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }

        const distance = matrix[len1][len2];
        const maxLength = Math.max(len1, len2);
        return maxLength === 0 ? 1 : (maxLength - distance) / maxLength;
    }

    provideFeedback(recognizedText, accuracy) {
        const feedbackElement = document.getElementById('pronunciationFeedback');
        const scoreElement = document.getElementById('accuracyScore');
        
        if (!feedbackElement || !scoreElement) return;

        // Update accuracy score
        scoreElement.innerHTML = `
            <div class="score-circle ${this.getScoreClass(accuracy)}">
                <span class="score-number">${accuracy}%</span>
                <span class="score-label">Accuracy</span>
            </div>
        `;

        // Provide detailed feedback
        let feedbackMessage = '';
        let feedbackClass = '';

        if (accuracy >= 90) {
            feedbackMessage = `Excellent! You pronounced "${this.currentWord}" very clearly.`;
            feedbackClass = 'feedback-excellent';
        } else if (accuracy >= 75) {
            feedbackMessage = `Good job! Your pronunciation of "${this.currentWord}" was quite clear. Keep practicing!`;
            feedbackClass = 'feedback-good';
        } else if (accuracy >= 60) {
            feedbackMessage = `Not bad! I heard "${recognizedText}". Try to pronounce "${this.currentWord}" more clearly.`;
            feedbackClass = 'feedback-okay';
        } else {
            feedbackMessage = `Keep trying! I heard "${recognizedText}". Listen to the correct pronunciation and try again.`;
            feedbackClass = 'feedback-needs-work';
        }

        feedbackElement.innerHTML = `
            <div class="feedback-message ${feedbackClass}">
                <i class="fas ${this.getFeedbackIcon(accuracy)}"></i>
                <p>${feedbackMessage}</p>
                <div class="feedback-details">
                    <span class="target-word">Target: "${this.currentWord}"</span>
                    <span class="recognized-word">You said: "${recognizedText}"</span>
                </div>
            </div>
        `;

        // Show tips for improvement
        if (accuracy < 75) {
            this.showPronunciationTips();
        }
    }

    getScoreClass(accuracy) {
        if (accuracy >= 90) return 'score-excellent';
        if (accuracy >= 75) return 'score-good';
        if (accuracy >= 60) return 'score-okay';
        return 'score-needs-work';
    }

    getFeedbackIcon(accuracy) {
        if (accuracy >= 90) return 'fa-star';
        if (accuracy >= 75) return 'fa-thumbs-up';
        if (accuracy >= 60) return 'fa-check-circle';
        return 'fa-redo';
    }

    showPronunciationTips() {
        const tipsElement = document.getElementById('pronunciationTips');
        if (!tipsElement) return;

        const tips = [
            "Speak clearly and at a moderate pace",
            "Make sure you're in a quiet environment",
            "Hold the microphone close to your mouth",
            "Listen to the correct pronunciation first",
            "Break down complex words into syllables"
        ];

        tipsElement.innerHTML = `
            <div class="pronunciation-tips">
                <h5><i class="fas fa-lightbulb"></i> Pronunciation Tips:</h5>
                <ul>
                    ${tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    handleRecognitionError(error) {
        let errorMessage = '';
        
        switch (error) {
            case 'no-speech':
                errorMessage = 'No speech was detected. Please try again.';
                break;
            case 'audio-capture':
                errorMessage = 'Could not access microphone. Please check your permissions.';
                break;
            case 'not-allowed':
                errorMessage = 'Microphone access was denied. Please allow microphone access and try again.';
                break;
            case 'network':
                errorMessage = 'Network error occurred. Please check your internet connection.';
                break;
            default:
                errorMessage = 'An error occurred during speech recognition. Please try again.';
        }

        const feedbackElement = document.getElementById('pronunciationFeedback');
        if (feedbackElement) {
            feedbackElement.innerHTML = `
                <div class="feedback-message feedback-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>${errorMessage}</p>
                </div>
            `;
        }
    }

    updateRecordingUI(isRecording) {
        const recordBtn = document.getElementById('recordBtn');
        const stopBtn = document.getElementById('stopRecordBtn');
        
        if (recordBtn && stopBtn) {
            if (isRecording) {
                recordBtn.disabled = true;
                recordBtn.classList.add('recording');
                stopBtn.disabled = false;
                stopBtn.classList.add('active');
            } else {
                recordBtn.disabled = false;
                recordBtn.classList.remove('recording');
                stopBtn.disabled = true;
                stopBtn.classList.remove('active');
            }
        }
    }

    enablePlaybackButton() {
        const playBtn = document.getElementById('playRecordingBtn');
        if (playBtn) {
            playBtn.disabled = false;
            playBtn.onclick = () => this.playRecording();
        }
    }

    playRecording() {
        if (this.recordedAudio) {
            const audio = new Audio(this.recordedAudio);
            audio.play();
        }
    }

    // Check if speech recognition is supported
    isSupported() {
        return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    }

    // Get microphone permission status
    async checkMicrophonePermission() {
        try {
            const result = await navigator.permissions.query({ name: 'microphone' });
            return result.state;
        } catch (error) {
            console.warn('Could not check microphone permission:', error);
            return 'unknown';
        }
    }
}

// Create global speech recognition instance
const speechRecognition = new SpeechRecognitionSystem();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SpeechRecognitionSystem };
}

