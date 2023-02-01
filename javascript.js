var pics = [
"<p><img src='rand_pic/somer_rise_4.jpg'></p>",    
"<p><img src='rand_pic/somer_rise_1.jpg'></p>",
"<p><img src='rand_pic/somer_rise_2.jpg'></p>",
"<p><img src='rand_pic/somer_rise_3.jpg'></p>",
"<p><img src='rand_pic/somer_rise_5.jpg'></p>",
"<p><img src='rand_pic/somer_rise_6.jpg'></p>",
"<p><img src='rand_pic/somer_rise_7.jpg'></p>",
"<p><img src='rand_pic/somer_rise_8.jpg'></p>",
"<p><img src='rand_pic/somer_rise_9.jpg'></p>",
"<p><img src='rand_pic/somer_rise_10.jpg'></p>",
"<p><img src='rand_pic/somer_rise_11.jpg'></p>",
"<p><img src='rand_pic/somer_rise_12.jpg'></p>",
"<p><img src='rand_picc/somer_rise_13.jpg'></p>",
"<p><img src='rand_pic/somer_rise_14.jpg'></p>",
"<p><img src='33 inch black drum.jpg'></p>",
"<p><img src='aransaspass.jpg'></p>",
"<p><img src='canoe_lake.jpg'></p>",
"<p><img src='shamrock.jpg'></p>",
"<p><img src='trentriver.jpg'></p>",
]

var quotes = [
"Life isn’t about getting and having, it’s about giving and being. - Kevin Kruse",
"Whatever the mind of man can conceive and believe, it can achieve - Napoleon Hill",
"Strive not to be a success, but rather to be of value. - Albert Einstein",
"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. -  Robert Frost",
"I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
"The most difficult thing is the decision to act, the rest is merely tenacity.- Amelia Earhart",
"Every strike brings me closer to the next home run. - Babe Ruth",
"Definiteness of purpose is the starting point of all achievement. - W. Clement Stone",
"We must balance conspicuous consumption with conscious capitalism. - Kevin Kruse",
"Life is what happens to you while you’re busy making other plans. - John Lennon",
"The most common way people give up their power is by thinking they don’t have any. - Alice Walker",
"The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
"An unexamined life is not worth living. - Socrates",
"Eighty percent of success is showing up. - Woody Allen",
"Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
"Winning isn’t everything, but wanting to win is. - Vince Lombardi",
"I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
"You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou",
"Either you run the day, or the day runs you. - Jim Rohn",
"Whether you think you can or you think you can’t, you’re right. - Henry Ford",

]

function newPics() {
    var randonNumber = Math.floor(Math.random() * (pics.length));
    document.getElementById('picDisplay').innerHTML = pics[randonNumber];
//}
//
//
//function newQuote() {
    var randonNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randonNumber];
}

