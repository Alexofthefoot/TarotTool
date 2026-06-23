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
    { title: 'Career Confidence', question: 'How can I feel more confident at work?', notes: 'Cards highlighted preparation and trusting your abilities.' }
];

// Reading_cards seed data (order does not match the above sample readings!)
const readingCards = [
    // 1. Financial Clarity (3 cards)
    { reading_id: 1, card_id: 10, position_number: 1, position_name: "Past", is_reversed: false },
    { reading_id: 1, card_id: 15, position_number: 2, position_name: "Present", is_reversed: true },
    { reading_id: 1, card_id: 33, position_number: 3, position_name: "Advice", is_reversed: false },

    // 2. Decision Making (3 cards)
    { reading_id: 2, card_id: 1, position_number: 1, position_name: "Option A Energy", is_reversed: false },
    { reading_id: 2, card_id: 21, position_number: 2, position_name: "Current State", is_reversed: false },
    { reading_id: 2, card_id: 52, position_number: 3, position_name: "Outcome", is_reversed: true },

    // 3. Monthly Outlook (2 cards)
    { reading_id: 3, card_id: 6, position_number: 1, position_name: "Theme", is_reversed: false },
    { reading_id: 3, card_id: 18, position_number: 2, position_name: "Challenge", is_reversed: false },

    // 4. Personal Growth (3 cards)
    { reading_id: 4, card_id: 11, position_number: 1, position_name: "Strengths", is_reversed: false },
    { reading_id: 4, card_id: 44, position_number: 2, position_name: "Blockage", is_reversed: true },
    { reading_id: 4, card_id: 67, position_number: 3, position_name: "Growth Path", is_reversed: false },

    // 5. Relationship Insight (3 cards)
    { reading_id: 5, card_id: 2, position_number: 1, position_name: "You", is_reversed: false },
    { reading_id: 5, card_id: 41, position_number: 2, position_name: "Partner", is_reversed: false },
    { reading_id: 5, card_id: 48, position_number: 3, position_name: "Advice", is_reversed: true },
];

db.serialize(() => {
    for (const reading of demoData) {
        const sql = `INSERT INTO readings (title, question, notes) VALUES (?, ?, ?)`;
        db.run(sql, [reading.title, reading.question, reading.notes]);
    }
    for (const readingCard of readingCards){
        const sql = `INSERT INTO reading_cards (reading_id, card_id, position_number, position_name) VALUES (?, ?, ?, ?)`;
        db.run(sql, [readingCard.reading_id, readingCard.card_id, readingCard.position_number, readingCard.position_name]);
    }
});