// Enhanced Interactive Eating Out Vocabulary - Main JavaScript

class EatingOutApp {
    constructor() {
        this.currentSection = 'restaurant-types';
        this.currentConversation = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.conversationAudio = null;
        this.isPlayingConversation = false;
        this.currentDialogueIndex = 0;
        
        this.init();
    }

    init() {
        this.setupNavigation();
        this.renderRestaurantTypes();
        this.renderMenuVocabulary();
        this.renderGeneralVocabulary();
        this.renderConversations();
        this.renderPronunciationPractice();
        this.renderActivities();
        this.setupModals();
        this.updateProgress();
        
        console.log('Enhanced Eating Out Vocabulary App initialized!');
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                this.showSection(section);
                this.updateNavigation(btn);
            });
        });
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            this.updateProgress();
        }
    }

    updateNavigation(activeBtn) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    renderRestaurantTypes() {
        const container = document.querySelector('.restaurant-grid');
        if (!container) return;

        let html = '';
        
        Object.values(vocabularyData.restaurantTypes.categories).forEach(category => {
            category.words.forEach(restaurant => {
                html += `
                    <div class="restaurant-card" onclick="app.showRestaurantDetails('${restaurant.word}')">
                        ${restaurant.image ? `<img src="${restaurant.image}" alt="${restaurant.word}" class="restaurant-image">` : '<div class="restaurant-image"></div>'}
                        <div class="restaurant-content">
                            <h3 class="restaurant-title">${restaurant.word}</h3>
                            <p class="restaurant-description">${restaurant.definition}</p>
                            <div class="restaurant-example">${restaurant.example}</div>
                            <button class="audio-btn" onclick="event.stopPropagation(); app.playAudio('${restaurant.word}')">
                                <i class="fas fa-volume-up"></i> Listen
                            </button>
                        </div>
                    </div>
                `;
            });
        });
        
        container.innerHTML = html;
    }

    renderMenuVocabulary() {
        const container = document.querySelector('#menu-vocabulary .vocabulary-categories');
        if (!container) return;

        let html = '';
        
        Object.values(vocabularyData.menuVocabulary.categories).forEach(category => {
            html += `
                <div class="category-card">
                    <h3 class="category-title">
                        <i class="fas fa-utensils"></i>
                        ${category.title}
                    </h3>
                    <div class="vocabulary-list">
                        ${category.words.map(word => `
                            <div class="vocabulary-word" onclick="app.showVocabularyDetails('${word.word}', '${word.definition}', '${word.example}')">
                                <div class="word-title">
                                    ${word.word}
                                    <button class="audio-btn" onclick="event.stopPropagation(); app.playAudio('${word.word}')" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">
                                        <i class="fas fa-volume-up"></i>
                                    </button>
                                </div>
                                <div class="word-definition">${word.definition}</div>
                                <div class="word-example">${word.example}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    renderGeneralVocabulary() {
        const container = document.querySelector('#general-vocabulary .vocabulary-categories');
        if (!container) return;

        let html = '';
        
        Object.values(vocabularyData.generalVocabulary.categories).forEach(category => {
            html += `
                <div class="category-card">
                    <h3 class="category-title">
                        <i class="fas fa-users"></i>
                        ${category.title}
                    </h3>
                    <div class="vocabulary-list">
                        ${category.words.map(word => `
                            <div class="vocabulary-word" onclick="app.showVocabularyDetails('${word.word}', '${word.definition}', '${word.example}')">
                                <div class="word-title">
                                    ${word.word}
                                    <button class="audio-btn" onclick="event.stopPropagation(); app.playAudio('${word.word}')" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">
                                        <i class="fas fa-volume-up"></i>
                                    </button>
                                </div>
                                <div class="word-definition">${word.definition}</div>
                                <div class="word-example">${word.example}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    renderConversations() {
        const container = document.querySelector('.conversations-container');
        if (!container) return;

        let html = '';
        
        conversationsData.forEach(conversation => {
            html += `
                <div class="conversation-card" onclick="app.openConversation('${conversation.id}')">
                    <div class="conversation-header">
                        <h3 class="conversation-title">${conversation.title}</h3>
                        <div class="conversation-meta">
                            <span class="difficulty-badge ${conversation.difficulty.toLowerCase()}">${conversation.difficulty}</span>
                            <span class="duration-badge"><i class="fas fa-clock"></i> ${conversation.duration}</span>
                        </div>
                    </div>
                    <p class="conversation-description">${conversation.description}</p>
                    <div class="characters-list">
                        <div class="characters-title">Characters:</div>
                        <div class="characters">${conversation.characters.join(', ')}</div>
                    </div>
                    <button class="play-conversation-btn">
                        <i class="fas fa-play"></i> Start Conversation
                    </button>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    renderPronunciationPractice() {
        const container = document.getElementById('practiceWordsList');
        if (!container) return;

        let html = '';
        practiceWords.forEach(word => {
            html += `
                <button class="practice-word-btn" onclick="app.selectPracticeWord('${word}')">
                    ${word}
                </button>
            `;
        });
        
        container.innerHTML = html;

        // Setup pronunciation controls
        this.setupPronunciationControls();
    }

    setupPronunciationControls() {
        const recordBtn = document.getElementById('recordBtn');
        const stopBtn = document.getElementById('stopRecordBtn');
        const playBtn = document.getElementById('playRecordingBtn');
        const playWordBtn = document.getElementById('playWordBtn');

        if (recordBtn) {
            recordBtn.addEventListener('click', () => {
                const currentWord = document.getElementById('practiceWord').textContent;
                if (currentWord && currentWord !== 'Select a word to practice') {
                    speechRecognition.startRecording(currentWord);
                }
            });
        }

        if (stopBtn) {
            stopBtn.addEventListener('click', () => {
                speechRecognition.stopRecording();
            });
        }

        if (playWordBtn) {
            playWordBtn.addEventListener('click', () => {
                const currentWord = document.getElementById('practiceWord').textContent;
                if (currentWord && currentWord !== 'Select a word to practice') {
                    this.playAudio(currentWord);
                }
            });
        }
    }

    selectPracticeWord(word) {
        // Update word display
        document.getElementById('practiceWord').textContent = word;
        
        // Enable play button
        document.getElementById('playWordBtn').disabled = false;
        document.getElementById('recordBtn').disabled = false;
        
        // Update selected button
        document.querySelectorAll('.practice-word-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        event.target.classList.add('selected');
        
        // Clear previous feedback
        document.getElementById('pronunciationFeedback').innerHTML = '';
        document.getElementById('accuracyScore').innerHTML = '';
    }

    renderActivities() {
        const container = document.querySelector('.activities-grid');
        if (!container) return;

        const activities = [
            {
                icon: 'fas fa-puzzle-piece',
                title: 'Vocabulary Matching',
                description: 'Match restaurant vocabulary words with their definitions',
                action: 'startVocabularyMatching'
            },
            {
                icon: 'fas fa-question-circle',
                title: 'Quick Quiz',
                description: 'Test your knowledge with timed questions',
                action: 'startQuickQuiz'
            },
            {
                icon: 'fas fa-headphones',
                title: 'Listening Practice',
                description: 'Listen to vocabulary words and identify them',
                action: 'startListeningPractice'
            },
            {
                icon: 'fas fa-utensils',
                title: 'Menu Builder',
                description: 'Create a restaurant menu using vocabulary words',
                action: 'startMenuBuilder'
            },
            {
                icon: 'fas fa-comments',
                title: 'Role Play',
                description: 'Practice restaurant conversations with different roles',
                action: 'startRolePlay'
            },
            {
                icon: 'fas fa-trophy',
                title: 'Challenge Mode',
                description: 'Complete all activities to earn achievements',
                action: 'startChallengeMode'
            }
        ];

        let html = '';
        activities.forEach(activity => {
            html += `
                <div class="activity-card" onclick="app.${activity.action}()">
                    <div class="activity-icon">
                        <i class="${activity.icon}"></i>
                    </div>
                    <h3 class="activity-title">${activity.title}</h3>
                    <p class="activity-description">${activity.description}</p>
                    <button class="activity-btn">Start Activity</button>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    setupModals() {
        // Conversation modal
        const conversationModal = document.getElementById('conversationModal');
        const closeModal = document.getElementById('closeModal');
        
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                this.closeConversationModal();
            });
        }

        // Vocabulary modal
        const vocabularyModal = document.getElementById('vocabularyModal');
        const closeVocabModal = document.getElementById('closeVocabModal');
        
        if (closeVocabModal) {
            closeVocabModal.addEventListener('click', () => {
                this.closeVocabularyModal();
            });
        }

        // Close modals when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === conversationModal) {
                this.closeConversationModal();
            }
            if (event.target === vocabularyModal) {
                this.closeVocabularyModal();
            }
        });
    }

    async playAudio(text, options = {}) {
        try {
            await audioGenerator.playAudio(text, options);
        } catch (error) {
            console.error('Error playing audio:', error);
            // Fallback to basic speech synthesis
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
    }

    showRestaurantDetails(restaurantName) {
        // Find restaurant data
        let restaurantData = null;
        Object.values(vocabularyData.restaurantTypes.categories).forEach(category => {
            const found = category.words.find(r => r.word === restaurantName);
            if (found) restaurantData = found;
        });

        if (!restaurantData) return;

        this.showVocabularyDetails(restaurantData.word, restaurantData.definition, restaurantData.example);
    }

    showVocabularyDetails(word, definition, example) {
        const modal = document.getElementById('vocabularyModal');
        const title = document.getElementById('vocabularyTitle');
        const content = document.getElementById('vocabularyContent');

        title.textContent = word;
        content.innerHTML = `
            <div class="vocabulary-detail">
                <h4>${word}</h4>
                <p class="definition"><strong>Definition:</strong> ${definition}</p>
                <p class="example"><strong>Example:</strong> ${example}</p>
                <div class="audio-controls">
                    <button class="audio-btn" onclick="app.playAudio('${word}')">
                        <i class="fas fa-volume-up"></i> Listen to Word
                    </button>
                    <button class="audio-btn" onclick="app.playAudio('${definition}')">
                        <i class="fas fa-volume-up"></i> Listen to Definition
                    </button>
                </div>
            </div>
        `;

        modal.classList.add('active');
    }

    closeVocabularyModal() {
        const modal = document.getElementById('vocabularyModal');
        modal.classList.remove('active');
    }

    openConversation(conversationId) {
        this.currentConversation = conversationsData.find(c => c.id === conversationId);
        if (!this.currentConversation) return;

        const modal = document.getElementById('conversationModal');
        const title = document.getElementById('conversationTitle');
        const conversationText = document.getElementById('conversationText');
        const questionsContainer = document.getElementById('questionsContainer');

        title.textContent = this.currentConversation.title;
        
        // Render dialogue
        let dialogueHtml = '';
        this.currentConversation.dialogue.forEach((line, index) => {
            dialogueHtml += `
                <div class="dialogue-line" id="dialogue-${index}">
                    <div class="speaker">${line.speaker}:</div>
                    <div class="dialogue-text">${line.text}</div>
                </div>
            `;
        });
        conversationText.innerHTML = dialogueHtml;

        // Render questions
        let questionsHtml = '';
        this.currentConversation.questions.forEach((question, index) => {
            questionsHtml += `
                <div class="question" data-question="${index}">
                    <div class="question-text">${index + 1}. ${question.question}</div>
                    <div class="question-options">
                        ${question.options.map((option, optionIndex) => `
                            <div class="option" data-option="${optionIndex}" onclick="app.selectAnswer(${index}, ${optionIndex})">
                                ${String.fromCharCode(65 + optionIndex)}. ${option}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        questionsContainer.innerHTML = questionsHtml;

        // Setup conversation controls
        this.setupConversationControls();

        // Reset state
        this.userAnswers = [];
        this.currentDialogueIndex = 0;
        document.getElementById('resultsContainer').innerHTML = '';

        modal.classList.add('active');
    }

    setupConversationControls() {
        const playBtn = document.getElementById('playConversationBtn');
        const pauseBtn = document.getElementById('pauseConversationBtn');
        const checkBtn = document.getElementById('checkAnswersBtn');

        if (playBtn) {
            playBtn.onclick = () => this.playConversation();
        }

        if (pauseBtn) {
            pauseBtn.onclick = () => this.pauseConversation();
        }

        if (checkBtn) {
            checkBtn.onclick = () => this.checkAnswers();
        }
    }

    async playConversation() {
        if (!this.currentConversation) return;

        this.isPlayingConversation = true;
        const playBtn = document.getElementById('playConversationBtn');
        const pauseBtn = document.getElementById('pauseConversationBtn');

        playBtn.disabled = true;
        pauseBtn.disabled = false;

        try {
            for (let i = 0; i < this.currentConversation.dialogue.length; i++) {
                if (!this.isPlayingConversation) break;

                const line = this.currentConversation.dialogue[i];
                this.currentDialogueIndex = i;

                // Highlight current line
                document.querySelectorAll('.dialogue-line').forEach(el => el.classList.remove('current'));
                document.getElementById(`dialogue-${i}`).classList.add('current');

                // Play audio with speaker-specific voice
                await this.playAudio(line.text, {
                    pitch: audioGenerator.getSpeakerPitch(line.speaker),
                    rate: 0.8
                });

                // Pause between lines
                await new Promise(resolve => setTimeout(resolve, 800));
            }
        } catch (error) {
            console.error('Error playing conversation:', error);
        }

        this.isPlayingConversation = false;
        playBtn.disabled = false;
        pauseBtn.disabled = true;

        // Remove highlighting
        document.querySelectorAll('.dialogue-line').forEach(el => el.classList.remove('current'));
    }

    pauseConversation() {
        this.isPlayingConversation = false;
        audioGenerator.stopAudio();
        
        const playBtn = document.getElementById('playConversationBtn');
        const pauseBtn = document.getElementById('pauseConversationBtn');
        
        playBtn.disabled = false;
        pauseBtn.disabled = true;
    }

    selectAnswer(questionIndex, optionIndex) {
        this.userAnswers[questionIndex] = optionIndex;
        
        // Update UI
        const question = document.querySelector(`[data-question="${questionIndex}"]`);
        question.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        question.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
    }

    checkAnswers() {
        if (!this.currentConversation) return;

        let correctCount = 0;
        const totalQuestions = this.currentConversation.questions.length;

        this.currentConversation.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correct;
            const questionElement = document.querySelector(`[data-question="${index}"]`);
            
            questionElement.querySelectorAll('.option').forEach((option, optionIndex) => {
                option.classList.remove('correct', 'incorrect');
                
                if (optionIndex === correctAnswer) {
                    option.classList.add('correct');
                }
                
                if (userAnswer === optionIndex && optionIndex !== correctAnswer) {
                    option.classList.add('incorrect');
                }
            });

            if (userAnswer === correctAnswer) {
                correctCount++;
            }

            // Show explanation
            if (!questionElement.querySelector('.explanation')) {
                const explanationDiv = document.createElement('div');
                explanationDiv.className = 'explanation';
                explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
                explanationDiv.style.marginTop = '1rem';
                explanationDiv.style.padding = '1rem';
                explanationDiv.style.background = '#f7fafc';
                explanationDiv.style.borderRadius = '8px';
                explanationDiv.style.fontSize = '0.9rem';
                questionElement.appendChild(explanationDiv);
            }
        });

        // Show results
        const percentage = Math.round((correctCount / totalQuestions) * 100);
        const resultsContainer = document.getElementById('resultsContainer');
        
        let resultClass = 'needs-improvement';
        let resultMessage = 'Keep practicing!';
        
        if (percentage >= 80) {
            resultClass = 'excellent';
            resultMessage = 'Excellent work!';
        } else if (percentage >= 60) {
            resultClass = 'good';
            resultMessage = 'Good job!';
        }

        resultsContainer.innerHTML = `
            <div class="results ${resultClass}">
                <h4>${resultMessage}</h4>
                <p>You got ${correctCount} out of ${totalQuestions} questions correct (${percentage}%)</p>
            </div>
        `;
    }

    closeConversationModal() {
        const modal = document.getElementById('conversationModal');
        modal.classList.remove('active');
        this.pauseConversation();
        this.currentConversation = null;
    }

    updateProgress() {
        // Calculate progress based on sections visited and activities completed
        const sections = ['restaurant-types', 'menu-vocabulary', 'general-vocabulary', 'conversations', 'pronunciation', 'activities'];
        const currentIndex = sections.indexOf(this.currentSection);
        const progress = ((currentIndex + 1) / sections.length) * 100;
        
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
    }

    // Activity methods
    startVocabularyMatching() {
        alert('Vocabulary Matching game coming soon! This will be an interactive drag-and-drop game.');
    }

    startQuickQuiz() {
        alert('Quick Quiz coming soon! This will be a timed multiple-choice quiz.');
    }

    startListeningPractice() {
        alert('Listening Practice coming soon! This will play audio and ask you to identify words.');
    }

    startMenuBuilder() {
        alert('Menu Builder coming soon! This will let you create a restaurant menu using vocabulary.');
    }

    startRolePlay() {
        alert('Role Play coming soon! This will let you practice conversations as different characters.');
    }

    startChallengeMode() {
        alert('Challenge Mode coming soon! This will combine all activities into a comprehensive challenge.');
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EatingOutApp();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EatingOutApp };
}

