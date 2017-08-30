$(document).ready(function () {
    var refreshBtn = document.getElementById('button'),
        textHolder = document.getElementById('quote'),
        textArray = ["We don't like admitting this, but it is a key component of human existance: the fact that life has the potential for things both wondrous and horrific. ~Douglas Kennedy ", "I'm interested in things that change the world or that affect the future and wondrous, new technology where you see it, and you're like, 'Wow, how did that even happen? How is that possible?' ~Elon Musk", "Take a leap of faith and begin this wondrous new year by believing. Believe in yourself. And believe that there is a loving Source - a Sower of Dreams - just waiting to be asked to help you make your dreams come true. ~Sarah Ban Breathnach", "Wondrous is the strength of cheerfulness, and its power of endurance - the cheerful man will do more in the same time, will do it; better, will preserve it longer, than the sad or sullen. ~Thomas Carlyle", "The speed of communications is wondrous to behold. It is also true that speed can multiply the distribution of information that we know to be untrue. ~Edward R. Murrow", "The world is still a fantastic and wondrous place to live. ~Seal", "Some deemed him wondrous wise, and some believed him mad. ~James Beattie", "Every place but that in which one is born is equally strange and wondrous. Once beyond the bounds of the city walls, and none knows what may happen. We have stepped forth into the Land of Faerie, but at least we are in the open air. ~Joseph Jacobs", "I don't think that books are wondrous, magical things that come from nowhere. It's important that a book has clues about where and how it was written. ~Alvaro Enrigue ", "I was the youngest child. I got to be myself and ask stupid questions because I was the youngest. It is so important to listen to the questions children have and reward them for the wondrous questions they ask. ~May-Britt Moser", "For Philistines like me, the mysteries of Washington can be both perplexing and wondrous. ~David Harsanyi", "How small a part of time they share, That are so wondrous sweet and fair! ~Edmund Waller", "For me it's been very exciting to contribute to the public's understanding of how rich and wondrous science is. ~Brian Greene", "I have a fondness for historical fiction, something wondrous like 'Wolf Hall,' but I'll read most anything as long as the story grabs my mind or my heart, and preferably both. You would be hard pressed, however, to find science fiction on my shelves. ~Sue Monk Kidd", "I truly believe that everything Sci-fi taught me as a child about an efficient and wondrous world will be happening in my lifetime. ~Yves Behar"],
        randomIndex = 0,
        previousIndex = 0;

    refreshBtn.onclick = updateText;


    function updateText() {
        while (randomIndex === previousIndex) {
            randomIndex = Math.floor(Math.random() * textArray.length);
        }
        previousIndex = randomIndex;
        textHolder.innerHTML = textArray[randomIndex];

        $('#quote').fadeIn();
        $("#twitter-share").attr("href", "https://twitter.com/intent/tweet/?text=" + textArray[randomIndex]);

    }
});
