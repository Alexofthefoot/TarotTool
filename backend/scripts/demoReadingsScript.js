const db = require('../database');

const demoData = [
    { title: 'Financial Clarity', question: 'How can I improve my financial situation?', notes: 'Cards highlighted budgeting, patience, and avoiding impulsive spending.' },
    { title: 'Career Guidance', question: 'What should I focus on to advance my career?', notes: 'The reading emphasized learning new skills and building relationships.' },
    { title: 'Relationship Insight', question: 'How can I strengthen my relationship?', notes: 'Cards suggested open communication and mutual understanding.' },
    { title: 'Love Reading', question: 'What should I know about my love life right now?', notes: 'The spread pointed to new opportunities for connection.' },
    { title: 'Decision Making', question: 'Should I take the new opportunity?', notes: 'Cards advised balancing intuition with practical considerations.' },
    { title: 'Monthly Outlook', question: 'What energy surrounds me this month?', notes: 'Themes of growth, patience, and reflection appeared.' },
    { title: 'Personal Growth', question: 'How can I become a better version of myself?', notes: 'The reading encouraged self-confidence and consistency.' },
    { title: 'Friendship Guidance', question: 'How can I improve a friendship?', notes: 'Cards emphasized honesty and quality time.' },
    { title: 'Workplace Challenges', question: 'How should I handle current work stress?', notes: 'The spread suggested setting boundaries and staying focused.' },
    { title: 'Family Matters', question: 'What should I focus on within my family?', notes: 'Cards highlighted compassion and understanding.' },

    { title: 'Future Path', question: 'What direction is my life heading?', notes: 'The reading suggested gradual progress toward long-term goals.' },
    { title: 'Creative Inspiration', question: 'How can I unlock more creativity?', notes: 'Cards encouraged experimentation and curiosity.' },
    { title: 'Confidence Boost', question: 'How can I build my confidence?', notes: 'The spread pointed toward recognizing past successes.' },
    { title: 'Spiritual Journey', question: 'What should I focus on spiritually?', notes: 'Cards suggested mindfulness and self-reflection.' },
    { title: 'Life Balance', question: 'How can I create better balance?', notes: 'The reading highlighted the need for rest and prioritization.' },
    { title: 'New Beginning', question: 'What should I know about this new chapter?', notes: 'Cards indicated optimism and fresh opportunities.' },
    { title: 'Self-Care Reading', question: 'How can I take better care of myself?', notes: 'The spread encouraged healthy routines and boundaries.' },
    { title: 'Goal Achievement', question: 'What will help me reach my goals?', notes: 'Cards emphasized persistence and planning.' },
    { title: 'Communication Advice', question: 'How can I communicate more effectively?', notes: 'The reading suggested clarity and active listening.' },
    { title: 'Inner Wisdom', question: 'What is my intuition trying to tell me?', notes: 'Cards encouraged trusting inner guidance.' },

    { title: 'Career Change', question: 'Is it time for a career change?', notes: 'The spread suggested exploring possibilities while staying practical.' },
    { title: 'Financial Opportunity', question: 'What opportunities are available financially?', notes: 'Cards pointed toward steady growth rather than quick rewards.' },
    { title: 'Healing Reading', question: 'What do I need to heal from?', notes: 'The reading emphasized acceptance and patience.' },
    { title: 'Travel Plans', question: 'What should I know about upcoming travel?', notes: 'Cards suggested flexibility and openness to surprises.' },
    { title: 'Learning Journey', question: 'How can I learn more effectively?', notes: 'The spread highlighted consistency and curiosity.' },
    { title: 'Leadership Reading', question: 'How can I become a better leader?', notes: 'Cards emphasized empathy and confidence.' },
    { title: 'Romantic Potential', question: 'What potential exists in my romantic life?', notes: 'The reading suggested meaningful new connections.' },
    { title: 'Stress Management', question: 'How can I reduce stress?', notes: 'Cards pointed toward simplicity and self-care.' },
    { title: 'Long-Term Vision', question: 'What should I focus on for the future?', notes: 'The spread emphasized patience and strategic thinking.' },
    { title: 'Career Confidence', question: 'How can I feel more confident at work?', notes: 'Cards highlighted preparation and trusting your abilities.' },

    { title: 'Daily Guidance', question: 'What should I focus on today?', notes: 'The reading encouraged mindfulness and positivity.' },
    { title: 'Opportunity Ahead', question: 'What opportunity should I pay attention to?', notes: 'Cards suggested remaining open to unexpected possibilities.' },
    { title: 'Relationship Growth', question: 'How can my relationship evolve positively?', notes: 'The spread highlighted trust and shared goals.' },
    { title: 'Financial Planning', question: 'What should guide my financial decisions?', notes: 'Cards emphasized discipline and long-term thinking.' },
    { title: 'Life Purpose', question: 'What should I know about my purpose?', notes: 'The reading suggested aligning actions with personal values.' },
    { title: 'Motivation Reading', question: 'How can I stay motivated?', notes: 'Cards pointed toward celebrating small wins.' },
    { title: 'New Project', question: 'What energy surrounds my new project?', notes: 'The spread suggested momentum and creativity.' },
    { title: 'Conflict Resolution', question: 'How can I resolve a current conflict?', notes: 'Cards emphasized patience and understanding.' },
    { title: 'Personal Reflection', question: 'What lesson should I reflect on?', notes: 'The reading highlighted growth through experience.' },
    { title: 'Positive Change', question: 'What positive change is coming?', notes: 'Cards suggested gradual but meaningful progress.' },

    { title: 'Abundance Reading', question: 'How can I attract abundance?', notes: 'The spread emphasized gratitude and consistency.' },
    { title: 'Work-Life Balance', question: 'How can I improve work-life balance?', notes: 'Cards highlighted prioritizing personal well-being.' },
    { title: 'Relationship Decision', question: 'What should guide my relationship decisions?', notes: 'The reading encouraged honesty and self-respect.' },
    { title: 'Career Opportunity', question: 'What should I know about upcoming career opportunities?', notes: 'Cards pointed toward preparation and confidence.' },
    { title: 'Self-Discovery', question: 'What can I learn about myself right now?', notes: 'The spread encouraged curiosity and self-acceptance.' },
    { title: 'Fresh Start', question: 'How can I make the most of a fresh start?', notes: 'Cards emphasized courage and optimism.' },
    { title: 'Future Relationship', question: 'What should I know about future relationships?', notes: 'The reading suggested openness and authenticity.' },
    { title: 'Financial Growth', question: 'How can I encourage financial growth?', notes: 'Cards highlighted patience and responsible planning.' },
    { title: 'Personal Strength', question: 'What is my greatest strength right now?', notes: 'The spread pointed toward resilience and determination.' },
    { title: 'Year Ahead', question: 'What theme will define the year ahead?', notes: 'Cards suggested transformation, learning, and steady progress.' }
];

demoData.forEach(reading => {
    db.run(
        `INSERT INTO readings (title, question, notes) VALUES (?, ?, ?)`,
        [reading.title, reading.question, reading.notes]
    );
});