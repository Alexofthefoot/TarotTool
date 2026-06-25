const db = require('../database');

const demoData = [
    { title: 'Financial Clarity', question: 'How can I improve my financial situation?', notes: 'Cards highlighted budgeting, patience, and avoiding impulsive spending.', created_at: '2024-01-10 10:15:00' },
    { title: 'Career Guidance', question: 'What should I focus on to advance my career?', notes: 'The reading emphasized learning new skills and building relationships.', created_at: '2024-02-12 14:30:00' },
    { title: 'Relationship Insight', question: 'How can I strengthen my relationship?', notes: 'Cards suggested open communication and mutual understanding.', created_at: '2024-03-08 09:20:00' },
    { title: 'Love Reading', question: 'What should I know about my love life right now?', notes: 'The spread pointed to new opportunities for connection.', created_at: '2024-04-18 18:05:00' },
    { title: 'Decision Making', question: 'Should I take the new opportunity?', notes: 'Cards advised balancing intuition with practical considerations.', created_at: '2024-05-06 11:45:00' },
    { title: 'Monthly Outlook', question: 'What energy surrounds me this month?', notes: 'Themes of growth, patience, and reflection appeared.', created_at: '2024-06-21 16:10:00' },
    { title: 'Personal Growth', question: 'How can I become a better version of myself?', notes: 'The reading encouraged self-confidence and consistency.', created_at: '2024-07-14 08:55:00' },
    { title: 'Friendship Guidance', question: 'How can I improve a friendship?', notes: 'Cards emphasized honesty and quality time.', created_at: '2024-08-09 19:25:00' },
    { title: 'Workplace Challenges', question: 'How should I handle current work stress?', notes: 'The spread suggested setting boundaries and staying focused.', created_at: '2024-09-03 12:40:00' },
    { title: 'Family Matters', question: 'What should I focus on within my family?', notes: 'Cards highlighted compassion and understanding.', created_at: '2024-10-17 15:00:00' },
    { title: 'Future Path', question: 'What direction is my life heading?', notes: 'The reading suggested gradual progress toward long-term goals.', created_at: '2024-11-11 10:30:00' },
    { title: 'Creative Inspiration', question: 'How can I unlock more creativity?', notes: 'Cards encouraged experimentation and curiosity.', created_at: '2024-12-05 17:15:00' },
    { title: 'Confidence Boost', question: 'How can I build my confidence?', notes: 'The spread pointed toward recognizing past successes.', created_at: '2025-01-09 09:10:00' },
    { title: 'Spiritual Journey', question: 'What should I focus on spiritually?', notes: 'Cards suggested mindfulness and self-reflection.', created_at: '2025-02-14 13:35:00' },
    { title: 'Life Balance', question: 'How can I create better balance?', notes: 'The reading highlighted the need for rest and prioritization.', created_at: '2025-03-22 08:20:00' },
    { title: 'New Beginning', question: 'What should I know about this new chapter?', notes: 'Cards indicated optimism and fresh opportunities.', created_at: '2025-04-16 14:50:00' },
    { title: 'Self-Care Reading', question: 'How can I take better care of myself?', notes: 'The spread encouraged healthy routines and boundaries.', created_at: '2025-05-07 11:05:00' },
    { title: 'Goal Achievement', question: 'What will help me reach my goals?', notes: 'Cards emphasized persistence and planning.', created_at: '2025-06-18 16:25:00' },
    { title: 'Communication Advice', question: 'How can I communicate more effectively?', notes: 'The reading suggested clarity and active listening.', created_at: '2025-07-10 09:45:00' },
    { title: 'Inner Wisdom', question: 'What is my intuition trying to tell me?', notes: 'Cards encouraged trusting inner guidance.', created_at: '2025-08-23 18:10:00' },
    { title: 'Career Change', question: 'Is it time for a career change?', notes: 'The spread suggested exploring possibilities while staying practical.', created_at: '2025-09-12 12:30:00' },
    { title: 'Financial Opportunity', question: 'What opportunities are available financially?', notes: 'Cards pointed toward steady growth rather than quick rewards.', created_at: '2025-10-05 10:05:00' },
    { title: 'Healing Reading', question: 'What do I need to heal from?', notes: 'The reading emphasized acceptance and patience.', created_at: '2025-11-19 15:40:00' },
    { title: 'Travel Plans', question: 'What should I know about upcoming travel?', notes: 'Cards suggested flexibility and openness to surprises.', created_at: '2025-12-08 09:15:00' },
    { title: 'Learning Journey', question: 'How can I learn more effectively?', notes: 'The spread highlighted consistency and curiosity.', created_at: '2026-01-14 13:00:00' },
    { title: 'Leadership Reading', question: 'How can I become a better leader?', notes: 'Cards emphasized empathy and confidence.', created_at: '2026-02-09 17:20:00' },
    { title: 'Romantic Potential', question: 'What potential exists in my romantic life?', notes: 'The reading suggested meaningful new connections.', created_at: '2026-03-18 11:10:00' },
    { title: 'Stress Management', question: 'How can I reduce stress?', notes: 'Cards pointed toward simplicity and self-care.', created_at: '2026-04-06 08:35:00' },
    { title: 'Long-Term Vision', question: 'What should I focus on for the future?', notes: 'The spread emphasized patience and strategic thinking.', created_at: '2026-05-21 16:55:00' },
    { title: 'Career Confidence', question: 'How can I feel more confident at work?', notes: 'Cards highlighted preparation and trusting your abilities.', created_at: '2026-06-12 10:20:00' }
];

// Reading_cards seed data
const readingCards = [
    // 1. Financial Clarity (3 cards)
    { reading_id: 1, card_id: 10, position_number: 1, position_name: "Past", is_reversed: false },
    { reading_id: 1, card_id: 15, position_number: 2, position_name: "Present", is_reversed: true },
    { reading_id: 1, card_id: 33, position_number: 3, position_name: "Advice", is_reversed: false },

    // 2. Career Guidance (3 cards)
    { reading_id: 2, card_id: 1, position_number: 1, position_name: "Option A Energy", is_reversed: false },
    { reading_id: 2, card_id: 21, position_number: 2, position_name: "Current State", is_reversed: false },
    { reading_id: 2, card_id: 52, position_number: 3, position_name: "Outcome", is_reversed: true },

    // 3. Relationship Insight (2 cards)
    { reading_id: 3, card_id: 6, position_number: 1, position_name: "Theme", is_reversed: false },
    { reading_id: 3, card_id: 18, position_number: 2, position_name: "Challenge", is_reversed: false },

    // 4. Love Reading (3 cards)
    { reading_id: 4, card_id: 11, position_number: 1, position_name: "Strengths", is_reversed: false },
    { reading_id: 4, card_id: 44, position_number: 2, position_name: "Blockage", is_reversed: true },
    { reading_id: 4, card_id: 67, position_number: 3, position_name: "Growth Path", is_reversed: false },

    // 5. Decision Making (3 cards)
    { reading_id: 5, card_id: 2, position_number: 1, position_name: "You", is_reversed: false },
    { reading_id: 5, card_id: 41, position_number: 2, position_name: "Partner", is_reversed: false },
    { reading_id: 5, card_id: 48, position_number: 3, position_name: "Advice", is_reversed: true },

    // 6. Monthly Outlook (2 cards)
    { reading_id: 6, card_id: 19, position_number: 1, position_name: "Theme", is_reversed: false },
    { reading_id: 6, card_id: 54, position_number: 2, position_name: "Challenge", is_reversed: true },

    // 7. Personal Growth (3 cards)
    { reading_id: 7, card_id: 8, position_number: 1, position_name: "Current Self", is_reversed: false },
    { reading_id: 7, card_id: 36, position_number: 2, position_name: "Lesson", is_reversed: false },
    { reading_id: 7, card_id: 22, position_number: 3, position_name: "Growth Path", is_reversed: false },

    // 8. Friendship Guidance (2 cards)
    { reading_id: 8, card_id: 40, position_number: 1, position_name: "Current Dynamic", is_reversed: false },
    { reading_id: 8, card_id: 63, position_number: 2, position_name: "Advice", is_reversed: false },

    // 9. Workplace Challenges (3 cards)
    { reading_id: 9, card_id: 57, position_number: 1, position_name: "Challenge", is_reversed: false },
    { reading_id: 9, card_id: 13, position_number: 2, position_name: "What Helps", is_reversed: false },
    { reading_id: 9, card_id: 27, position_number: 3, position_name: "Outcome", is_reversed: true },

    // 10. Family Matters (2 cards)
    { reading_id: 10, card_id: 43, position_number: 1, position_name: "Current Energy", is_reversed: false },
    { reading_id: 10, card_id: 9, position_number: 2, position_name: "Focus", is_reversed: false },

    // 11. Future Path (5 cards)
    { reading_id: 11, card_id: 7, position_number: 1, position_name: "Past", is_reversed: false },
    { reading_id: 11, card_id: 70, position_number: 2, position_name: "Present", is_reversed: false },
    { reading_id: 11, card_id: 29, position_number: 3, position_name: "Obstacle", is_reversed: true },
    { reading_id: 11, card_id: 14, position_number: 4, position_name: "Advice", is_reversed: false },
    { reading_id: 11, card_id: 21, position_number: 5, position_name: "Future", is_reversed: false },

    // 12. Creative Inspiration (1 card)
    { reading_id: 12, card_id: 24, position_number: 1, position_name: "Inspiration", is_reversed: false },

    // 13. Confidence Boost (2 cards)
    { reading_id: 13, card_id: 4, position_number: 1, position_name: "Inner Strength", is_reversed: false },
    { reading_id: 13, card_id: 61, position_number: 2, position_name: "Action", is_reversed: false },

    // 14. Spiritual Journey (3 cards)
    { reading_id: 14, card_id: 5, position_number: 1, position_name: "Current Path", is_reversed: false },
    { reading_id: 14, card_id: 9, position_number: 2, position_name: "Lesson", is_reversed: false },
    { reading_id: 14, card_id: 18, position_number: 3, position_name: "Guidance", is_reversed: false },

    // 15. Life Balance (2 cards)
    { reading_id: 15, card_id: 14, position_number: 1, position_name: "What Needs Attention", is_reversed: false },
    { reading_id: 15, card_id: 74, position_number: 2, position_name: "Balance Point", is_reversed: false },

    // 16. New Beginning (3 cards)
    { reading_id: 16, card_id: 1, position_number: 1, position_name: "Starting Point", is_reversed: false },
    { reading_id: 16, card_id: 31, position_number: 2, position_name: "Opportunity", is_reversed: false },
    { reading_id: 16, card_id: 17, position_number: 3, position_name: "Potential", is_reversed: false },

    // 17. Self-Care Reading (1 card)
    { reading_id: 17, card_id: 45, position_number: 1, position_name: "Self-Care Focus", is_reversed: false },

    // 18. Goal Achievement (3 cards)
    { reading_id: 18, card_id: 69, position_number: 1, position_name: "Goal", is_reversed: false },
    { reading_id: 18, card_id: 28, position_number: 2, position_name: "Obstacle", is_reversed: true },
    { reading_id: 18, card_id: 34, position_number: 3, position_name: "Success Strategy", is_reversed: false },

    // 19. Communication Advice (2 cards)
    { reading_id: 19, card_id: 58, position_number: 1, position_name: "Current Style", is_reversed: false },
    { reading_id: 19, card_id: 60, position_number: 2, position_name: "Advice", is_reversed: false },

    // 20. Inner Wisdom (1 card)
    { reading_id: 20, card_id: 2, position_number: 1, position_name: "Intuitive Message", is_reversed: false },

    // 21. Career Change (3 cards)
    { reading_id: 21, card_id: 16, position_number: 1, position_name: "What Ends", is_reversed: false },
    { reading_id: 21, card_id: 35, position_number: 2, position_name: "Opportunity", is_reversed: false },
    { reading_id: 21, card_id: 72, position_number: 3, position_name: "Outcome", is_reversed: false },

    // 22. Financial Opportunity (2 cards)
    { reading_id: 22, card_id: 76, position_number: 1, position_name: "Opportunity", is_reversed: false },
    { reading_id: 22, card_id: 73, position_number: 2, position_name: "Advice", is_reversed: false },

    // 23. Healing Reading (3 cards)
    { reading_id: 23, card_id: 13, position_number: 1, position_name: "Source", is_reversed: false },
    { reading_id: 23, card_id: 42, position_number: 2, position_name: "Healing Energy", is_reversed: false },
    { reading_id: 23, card_id: 20, position_number: 3, position_name: "Next Step", is_reversed: false },

    // 24. Travel Plans (2 cards)
    { reading_id: 24, card_id: 7, position_number: 1, position_name: "Journey", is_reversed: false },
    { reading_id: 24, card_id: 32, position_number: 2, position_name: "Advice", is_reversed: false },

    // 25. Learning Journey (2 cards)
    { reading_id: 25, card_id: 12, position_number: 1, position_name: "Current Approach", is_reversed: false },
    { reading_id: 25, card_id: 37, position_number: 2, position_name: "Growth", is_reversed: false },

    // 26. Leadership Reading (3 cards)
    { reading_id: 26, card_id: 4, position_number: 1, position_name: "Leader Strength", is_reversed: false },
    { reading_id: 26, card_id: 38, position_number: 2, position_name: "Team Dynamic", is_reversed: false },
    { reading_id: 26, card_id: 11, position_number: 3, position_name: "Guidance", is_reversed: false },

    // 27. Romantic Potential (4 cards)
    { reading_id: 27, card_id: 41, position_number: 1, position_name: "Current Energy", is_reversed: false },
    { reading_id: 27, card_id: 6, position_number: 2, position_name: "Potential", is_reversed: false },
    { reading_id: 27, card_id: 46, position_number: 3, position_name: "Advice", is_reversed: false },
    { reading_id: 27, card_id: 17, position_number: 4, position_name: "Outcome", is_reversed: false },

    // 28. Stress Management (2 cards)
    { reading_id: 28, card_id: 9, position_number: 1, position_name: "Cause", is_reversed: false },
    { reading_id: 28, card_id: 65, position_number: 2, position_name: "Relief", is_reversed: false },

    // 29. Long-Term Vision (3 cards)
    { reading_id: 29, card_id: 3, position_number: 1, position_name: "Foundation", is_reversed: false },
    { reading_id: 29, card_id: 70, position_number: 2, position_name: "Focus", is_reversed: false },
    { reading_id: 29, card_id: 22, position_number: 3, position_name: "Future Outcome", is_reversed: false },

    // 30. Career Confidence (2 cards)
    { reading_id: 30, card_id: 11, position_number: 1, position_name: "Strength", is_reversed: false },
    { reading_id: 30, card_id: 30, position_number: 2, position_name: "Advice", is_reversed: false },
];

db.serialize(() => {
    for (const reading of demoData) {
        const sql = `INSERT INTO readings (title, question, notes, created_at) VALUES (?, ?, ?, ?)`;
        db.run(sql, [reading.title, reading.question, reading.notes, reading.created_at]);
    }
    for (const readingCard of readingCards) {
        const sql = `INSERT INTO reading_cards (reading_id, card_id, position_number, position_name) VALUES (?, ?, ?, ?)`;
        db.run(sql, [readingCard.reading_id, readingCard.card_id, readingCard.position_number, readingCard.position_name]);
    }
});