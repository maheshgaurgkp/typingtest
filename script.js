  // Elements
  const timeSelect = document.getElementById('timeSelect');
  const levelSelect = document.getElementById('levelSelect');
  const startBtn = document.getElementById('startBtn');
  const textDisplay = document.getElementById('textDisplay');
  const inputArea = document.getElementById('inputArea');
  const timeLeftSpan = document.getElementById('timeLeft');
  const wpmSpan = document.getElementById('wpm');
  const accuracySpan = document.getElementById('accuracy');
  const historyList = document.getElementById('historyList');

  // Fill time select dropdown 1-10
  for(let i=1; i<=10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    timeSelect.appendChild(option);
  }
  timeSelect.value = "1";

  // Practice texts by level
  const texts = {
    easy: `I wake up early in the morning. I get ready and eat breakfast. Then, I go to school. I like my school very much. My teacher is kind and helps me learn.

At school, I have many subjects. I study math, reading, writing, and science. Math is fun because I like to count and solve problems. Reading is nice because I learn new words and stories.

During the day, I play with my friends. We run, jump, and laugh a lot. Playing makes me happy. After playtime, we go back to class to learn more.

I eat lunch with my friends. We share food and talk about our day. After lunch, we have more classes. Sometimes, we do art or music. I enjoy drawing pictures and singing songs.

At the end of the day, I go home. I tell my family about my day. Then, I do my homework. Homework helps me practice what I learned.

I like school because I learn new things and see my friends. Every day is a good day at school. Every day, I follow a simple routine. I wake up early in the morning. The sun is just rising. I feel happy to start a new day. I get out of bed slowly and stretch my arms. Then, I go to the bathroom to wash my face and brush my teeth. The cold water wakes me up.

After that, I go to the kitchen to eat breakfast. I like to eat toast with butter and a glass of milk. Sometimes, I have fruit like bananas or apples. Breakfast gives me energy for the day. I sit at the table and eat quietly. Sometimes, I talk with my family about our plans.

Next, I get dressed for school. I wear my uniform or comfortable clothes. I check my bag to make sure I have my books, pencils, and lunch. I like to be ready so I do not forget anything.

When it is time, I leave the house and walk to the bus stop. I wait for the bus with other children. The bus arrives, and we all get on. The ride to school is fun. I look outside and see trees, cars, and people. Sometimes, I listen to music or talk with friends on the bus.

At school, I meet my teacher and classmates. We start the day with a greeting. The teacher writes the lesson on the board. We pay attention and ask questions when we do not understand. School is a place to learn many things.

We have different classes during the day. I enjoy math because I like numbers. I also like reading stories in language class. Science is interesting because we learn about animals, plants, and the earth.

During break time, I play with my friends. We run and play games like tag or hide and seek. Playing helps me feel happy and ready to learn more.

Lunch is my favorite time. I eat the food my parents packed for me. Sometimes, I share snacks with my friends. We talk about our favorite cartoons and toys. After lunch, we go back to class for more lessons. Sometimes, we do art or music. I like drawing pictures with colors and singing songs. These activities are fun and help me relax.

At the end of the school day, I get on the bus to go home. When I arrive, I tell my family about my day. Then, I do my homework. Homework helps me practice what I learned in class.

After homework, I play outside or watch TV. I eat dinner with my family. We talk about our day and plan for tomorrow.

Before bed, I take a bath and get ready to sleep. I read a book or listen to a story. Then, I close my eyes and dream about new adventures. I have a small family. There are four people in my family. My mother, father, sister, and me. We live in a nice house. I love my family very much. We spend time together and help each other.

My mother is kind and caring. She cooks delicious meals every day. I like her cooking. My favorite food is pasta. She also helps me with my homework when I have questions.

My father works at an office. He goes to work early in the morning and comes home in the evening. He tells me stories about his job and teaches me many things. He likes to play soccer on weekends. Sometimes, he plays with me in the yard.

My sister is younger than me. She is five years old. We play games together and watch cartoons. Sometimes, we fight, but we always say sorry and make up quickly. I like being her big brother/sister and helping her learn new things.

We have a pet dog named Max. Max is friendly and loves to play. He barks when someone comes to the door. Max is part of our family, and we take care of him.

I also have many friends at school and in my neighborhood. We play games, share snacks, and help each other. Friends are important because they make life fun and less lonely.

My best friend’s name is Anna. She is kind and funny. We like to draw pictures and read books together. Sometimes, we visit each other’s houses and play video games.

Having good friends teaches us how to be kind, share, and work as a team. I enjoy spending time with my friends and learning from them. One of my favorite hobbies is reading books. I like to read stories about animals, adventures, and magic. Reading is fun because it takes me to different places in my imagination.

I have many books at home. Some are picture books, and some have many words. When I read, I use my finger to follow the words. Sometimes, I read aloud to practice speaking.

Reading helps me learn new words and understand the world better. I can learn about countries, history, and science from books. My teacher says that reading makes me smarter.

When I finish a book, I feel happy and proud. I like to tell my friends about the stories I read. Sometimes, we borrow books from the library and share them.

In the evenings, I like to read before going to sleep. It helps me relax and have nice dreams. My parents read to me when I am very young, and now I read by myself.

I hope to read many more books in the future. Reading is a hobby that I will always enjoy. One sunny day, my family and I went to the park. The weather was nice and warm. We packed a small bag with snacks, water, and a ball to play with.

When we arrived at the park, we saw many people walking, playing, and having fun. There were tall trees and green grass everywhere. The birds were singing in the trees. I felt happy to be outside in nature.

First, we walked along a path. We saw flowers of different colors – red, yellow, and blue. The flowers smelled very nice. My sister picked a small flower and gave it to me. I smiled and said thank you.

Then, we went to the playground. There were swings, slides, and a big climbing frame. My sister loved the swings. She asked me to push her gently. We laughed as she went up and down.

After that, we played ball. My father threw the ball, and I caught it. My mother and sister tried to catch it too. It was fun running and playing together.

We sat on a bench to eat our snacks. We had sandwiches, apples, and juice. While we ate, we watched ducks swimming in the pond nearby. The ducks were calm and quiet. Some children were feeding them bread.

Before leaving, we took a short walk around the park. We saw squirrels running up and down the trees. I tried to take a picture, but the squirrels were too fast.

When it was time to go home, I felt tired but happy. Spending time in the park with my family was a wonderful day. I hope we can go again soon. I like to help my family at home. Helping is important because it makes things easier for everyone. It also shows that I care.

In the morning, I help by making my bed. I pull the blanket and put my pillows in place. A clean bed makes me feel good.

I also help set the table for meals. I put the plates, forks, knives, and spoons on the table. Sometimes, I bring the food from the kitchen to the table.

After eating, I help clear the table. I take the plates and put them in the sink or dishwasher. I also wipe the table with a cloth.

I help with small cleaning tasks, like sweeping the floor or dusting the furniture. It is fun to see the house clean and tidy.

On weekends, I help my parents in the garden. We water the plants and pull out weeds. The flowers grow big and beautiful when we take care of them.

Helping at home teaches me responsibility. It also makes my family happy. I like to do my part and feel proud of myself. Last weekend, my family and I went to the zoo. It was a fun and exciting day. The sun was shining, and the sky was blue.

When we arrived, we saw a big map of the zoo. There were many animals to see. We decided to visit the lions first.

The lions were sleeping under a tree. They looked big and strong. The lion’s mane was thick and golden. I learned that lions are called the “king of the jungle.”

Next, we visited the monkeys. The monkeys were very active. They jumped from tree to tree and made funny sounds. Some monkeys were eating bananas. I laughed when one monkey made a silly face.

We also saw elephants. The elephants were huge! They used their long trunks to drink water and pick up food. One elephant sprayed water with its trunk. It was very funny to watch.

Later, we went to see the colorful birds. There were parrots, peacocks, and flamingos. The birds had bright feathers and sang beautiful songs.

At the end of the visit, we stopped by the petting zoo. We fed small goats and rabbits. It was nice to touch the animals softly.

I had a great time at the zoo. I learned a lot about animals and nature. I hope to visit the zoo again soon. Every school day starts early for me. I wake up at 7 o’clock. After I get ready, I eat breakfast. My favorite breakfast is cereal with milk. Then, I pack my school bag with my books and lunchbox.

I leave home at 7:30 and walk to the bus stop. The bus comes quickly, and I find a seat near the window. On the way, I look outside and see houses, trees, and cars.

At school, the day begins with the morning assembly. We stand in rows and sing the national anthem. The principal talks to us about important news and good behavior.

After the assembly, we go to our classrooms. The first lesson is usually math. I like math because I enjoy solving problems and working with numbers.

Next, we have language class. We read stories, learn new words, and practice writing. Our teacher helps us improve our reading skills.

At recess, I play with my friends outside. We run and play games like tag or catch. Sometimes, we eat snacks and drink water.

After recess, we have science class. We learn about plants, animals, and the weather. We do simple experiments, like watching how plants grow.

Lunch time is at noon. I eat the food my mother packed for me. After lunch, we have art class. I love to draw and paint. We use colors to create pictures.

The last lesson is physical education. We play sports and do exercises to stay healthy. Running, jumping, and playing games are fun.

School ends at 3 o’clock. I take the bus home and tell my family about my day. I do my homework and prepare for the next day.`,
    medium: `Exercise is very important for our health. It helps keep our body strong and our mind sharp. When we exercise regularly, we feel more energetic and happy.

There are many types of exercise. Some people like to run or walk. Others prefer swimming or riding a bike. Playing sports like soccer, basketball, or tennis is also a good way to exercise.

Exercise helps our heart stay healthy. It improves blood flow and lowers the risk of diseases. It also makes our muscles and bones stronger. Strong muscles help us do everyday activities easily.

Besides physical benefits, exercise is good for our mental health. When we move our bodies, our brain releases chemicals called endorphins. These chemicals make us feel good and reduce stress.

Exercising regularly can help us sleep better. A good night’s sleep helps our body rest and repair itself. It also improves our concentration and memory.

It is important to find an exercise we enjoy. This way, we will want to do it often. Exercising with friends or family can make it more fun.

We should also remember to warm up before exercising and cool down after. This helps prevent injuries.

In summary, exercise is a key part of a healthy life. It benefits both our body and mind. Making time for exercise every day will help us live longer and feel better. Eating healthy food is important for our body and mind. When we eat good food, we get the energy we need to work, play, and learn. Healthy eating helps us grow strong and stay well.

A balanced diet includes many types of food. We need fruits and vegetables because they have vitamins and minerals. These help protect us from sickness and keep our body working well.

We should eat whole grains like rice, bread, and oats. Whole grains give us fiber, which helps our digestion. Protein is also important. It helps build muscles and repair the body. Good sources of protein are meat, fish, eggs, beans, and nuts.

Drinking enough water every day is very important. Water keeps us hydrated and helps our body get rid of waste.

We should avoid eating too much sugar, salt, and fried foods. These can cause health problems if we eat them often. Instead, it is better to choose healthier snacks like fruits, yogurt, or nuts.

Eating meals at regular times helps our body stay balanced. Skipping meals can make us feel tired and hungry.

It is good to enjoy food and eat slowly. This way, we can notice when we are full and avoid eating too much.

In summary, healthy eating habits help us feel good and stay strong. Making smart food choices is an important part of a healthy life. Reading is a valuable skill that helps us learn and grow. When we read, we discover new ideas and learn about the world around us. Reading can be both fun and educational.

Books come in many types. There are stories, facts, poems, and more. Reading stories lets us use our imagination and enjoy adventures. Reading facts helps us understand important information and solve problems.

Good reading skills help us in school and in everyday life. When we read well, we can understand instructions, write better, and communicate clearly.

Reading regularly also improves our vocabulary. We learn new words and how to use them correctly. This makes our speaking and writing stronger.

Libraries are great places to find books. We can borrow books for free and read many different kinds of stories. Some libraries also have computers and programs to help us learn.

In today’s world, we can also read on tablets, phones, and computers. E-books and online articles are easy to find and read.

To enjoy reading, it is good to choose books that interest us. Reading a little every day helps us become better readers.

In summary, reading is a key skill for success. It opens doors to knowledge, creativity, and enjoyment. Friendship is an important part of our lives. Friends give us support, happiness, and comfort. Having good friends helps us feel connected and less lonely.

Friends share our joys and sorrows. They listen when we have problems and help us find solutions. When we are sad, a friend’s kind words can make us feel better.

Making friends takes time and effort. We need to be kind, honest, and respectful. Listening carefully and sharing our thoughts helps build trust.

Friends also teach us important social skills like cooperation, patience, and forgiveness. Sometimes, friends may disagree, but working through problems makes friendships stronger.

Spending time with friends can be fun. We play games, talk, and learn from each other. Friends encourage us to try new things and help us grow.

In school or work, friends make tasks easier and more enjoyable. Teamwork with friends often leads to better results.

It is important to choose friends who treat us well and respect our feelings. Good friends help us become better people.

In summary, friendship enriches our lives. It provides love, support, and happiness. Building strong friendships is a valuable part of life. The year has four seasons: spring, summer, autumn, and winter. Each season has its own weather and special activities.

Spring is the season when plants start to grow again. Flowers bloom, and trees get new leaves. The weather becomes warmer, and animals come out of their winter homes. Many people like to spend time outside in spring because the days are sunny and fresh.

Summer is the hottest season. The sun shines strongly, and many people go to the beach or swimming pools to cool off. It is a time for vacations, outdoor games, and barbecues. Summer days are long, and the nights are short.

Autumn, also called fall, is when leaves change color. They turn red, yellow, and orange before falling from the trees. The weather gets cooler, and farmers harvest crops. Many people enjoy walking in parks to see the beautiful colors of autumn.

Winter is the coldest season. In some places, it snows and the ground is covered in white. People wear warm clothes like coats, hats, and gloves. Winter holidays like Christmas and New Year are celebrated during this season. It is also a time for indoor activities and hot drinks.

Each season brings changes and different experiences. Knowing about the seasons helps us prepare for the weather and enjoy nature’s beauty. Saving money is an important habit that helps us prepare for the future. When we save, we put aside some of the money we earn or receive for later use. This can help us buy things we need or want and handle emergencies.

One way to save money is to create a budget. A budget helps us plan how much money to spend and how much to save. It is good to write down our expenses and income so we can see where our money goes.

Saving money teaches us discipline and patience. Instead of buying things right away, we learn to wait and think carefully. This helps us avoid wasteful spending.

Having savings can help us in many situations. For example, if our bike breaks or we need school supplies, we can use saved money instead of borrowing. Saving also helps us reach big goals like buying a computer or going on a trip.

Banks offer special savings accounts where money can earn interest. This means the money grows slowly over time.

It is good to start saving money from a young age. Even small amounts add up over time and make a difference.

In summary, saving money is a smart way to manage our finances. It gives us security and helps us achieve our goals. The life cycle of a butterfly is a wonderful process that shows how living things change and grow. There are four main stages in the life of a butterfly: egg, caterpillar, pupa, and adult.

The first stage begins when a butterfly lays tiny eggs on a leaf. These eggs are very small and hard to see. After a few days, the eggs hatch, and tiny caterpillars come out. The caterpillar is also called a larva.

The caterpillar spends most of its time eating leaves. It grows quickly and sheds its skin several times as it gets bigger. This stage is important because the caterpillar needs a lot of energy to change.

Next, the caterpillar forms a pupa, also called a chrysalis. Inside the chrysalis, the caterpillar changes into a butterfly. This process is called metamorphosis. It can take days or weeks for the butterfly to fully develop.

Finally, the adult butterfly comes out of the chrysalis. At first, its wings are soft and wet. The butterfly waits for its wings to dry before it can fly. As an adult, the butterfly will fly, find food, and lay eggs to start the cycle again.

The life cycle of a butterfly teaches us about growth, change, and the beauty of nature. Protecting the environment is very important for the health of our planet and all living things. The environment includes the air we breathe, the water we drink, the trees and plants, and the animals that live around us.

Human activities like cutting down trees, throwing trash in rivers, and using too much plastic can harm the environment. Pollution makes the air dirty and water unsafe. It can also hurt animals and plants.

One way to protect the environment is by reducing waste. We can recycle paper, plastic, and glass instead of throwing them away. Recycling helps save resources and reduces pollution.

Saving water is also important. We should turn off the tap when brushing our teeth and fix leaks. Water is needed by all living things, so using it wisely helps everyone.

Planting trees helps clean the air and provides homes for animals. Trees also help keep the soil healthy and stop floods.

Using less energy by turning off lights and using energy-saving bulbs helps reduce pollution from power plants.

Everyone can help protect the environment by making small changes. Together, we can keep our planet clean and safe for future generations.`,
    hard: `Technology has profoundly transformed the way we live, work, and communicate. Over the past few decades, rapid advancements in technology have led to significant changes in various aspects of society, influencing education, healthcare, and business.

In education, technology has revolutionized traditional teaching methods. Digital tools like computers, tablets, and the internet provide students with instant access to vast amounts of information. Online learning platforms have made education more accessible, allowing people to study from anywhere in the world. However, this shift also presents challenges, such as ensuring equal access to technology and maintaining student engagement.

Healthcare has benefited immensely from technological innovations. Modern diagnostic tools, advanced surgical equipment, and telemedicine have improved patient outcomes and expanded healthcare access. Technology enables doctors to monitor patients remotely and provide timely interventions. Despite these advantages, concerns about data privacy and the ethical use of artificial intelligence in medicine remain prevalent.

In the business world, technology has increased efficiency and productivity. Automation and artificial intelligence streamline routine tasks, allowing employees to focus on more strategic activities. E-commerce platforms have transformed retail by enabling consumers to shop online conveniently. Nonetheless, the rapid pace of technological change requires workers to continuously update their skills to remain competitive.

While technology offers numerous benefits, it also raises important questions about its impact on social interactions, privacy, and employment. It is crucial for policymakers, educators, and industry leaders to collaborate in addressing these challenges and harness technology’s potential responsibly. Climate change is one of the most pressing issues facing humanity today. It refers to long-term alterations in temperature, precipitation, and weather patterns caused primarily by human activities. The increase in greenhouse gases, such as carbon dioxide and methane, has accelerated global warming, leading to profound environmental and social consequences.

One major impact of climate change is the rising global temperature. This warming causes glaciers and polar ice caps to melt, contributing to rising sea levels. Coastal cities around the world face increased risks of flooding and erosion, threatening millions of people.

Climate change also affects ecosystems and biodiversity. Many species struggle to adapt to shifting habitats and changing food availability. This disruption can lead to the extinction of vulnerable plants and animals, reducing the richness of life on Earth.

Extreme weather events, such as hurricanes, droughts, and wildfires, have become more frequent and severe due to climate change. These events not only cause physical damage but also disrupt economies and displace communities.

Addressing climate change requires international cooperation and innovative solutions. Transitioning to renewable energy sources, enhancing energy efficiency, and protecting natural carbon sinks like forests are crucial steps. Public awareness and policy reforms play essential roles in mitigating the adverse effects of climate change.

In conclusion, combating climate change is vital to ensure a sustainable future for our planet and generations to come. Cultural diversity refers to the existence of a variety of cultural or ethnic groups within a society. It enriches communities by fostering creativity, innovation, and mutual understanding. In today’s globalized world, appreciating cultural diversity is essential for social cohesion and peaceful coexistence.

One of the primary benefits of cultural diversity is the exchange of ideas and traditions. Different cultures offer unique perspectives on art, cuisine, language, and values. This diversity can inspire new ways of thinking and problem-solving, which benefits education, business, and the arts.

However, cultural diversity also presents challenges. Misunderstandings and prejudices can arise when people are unfamiliar with other cultures. Promoting intercultural dialogue and education helps overcome stereotypes and build respect among diverse groups.

Governments and organizations play a crucial role in protecting cultural heritage and promoting inclusivity. Policies that support minority rights and equal opportunities are vital for reducing discrimination and ensuring that all cultural groups feel valued.

Moreover, cultural diversity enhances global cooperation. When people understand and appreciate different cultures, they are better equipped to work together on issues such as climate change, economic development, and human rights.

In summary, embracing cultural diversity not only celebrates human richness but also contributes to a more harmonious and dynamic world. Artificial Intelligence (AI) is rapidly transforming numerous sectors, including healthcare, finance, transportation, and entertainment. AI systems use algorithms and vast amounts of data to perform tasks that traditionally required human intelligence, such as problem-solving, pattern recognition, and decision-making.

In healthcare, AI assists in diagnosing diseases, analyzing medical images, and personalizing treatment plans. These advancements lead to improved patient outcomes and more efficient healthcare delivery. However, the integration of AI raises ethical questions about data privacy, informed consent, and the potential for bias in decision-making algorithms.

In the financial sector, AI automates trading, detects fraudulent transactions, and provides personalized financial advice. This increases efficiency and security but also necessitates robust regulatory frameworks to prevent misuse and protect consumers.

Transportation is being revolutionized by AI-driven autonomous vehicles, which promise to reduce accidents caused by human error and improve traffic management. Yet, concerns remain regarding safety, liability, and the impact on employment in driving professions.

Entertainment industries leverage AI for content recommendation, game development, and virtual reality experiences, enhancing user engagement. However, the use of AI-generated content also raises debates about creativity and intellectual property.

As AI continues to evolve, it is essential to balance innovation with ethical considerations. Collaboration among technologists, policymakers, and the public is critical to ensure AI benefits society while mitigating risks. Urbanization refers to the increasing number of people living in cities. While it offers economic opportunities and improved access to services, urbanization also presents significant challenges for governments and communities.

One major issue is overcrowding. As more people move to cities, housing becomes scarce, leading to the growth of informal settlements or slums. These areas often lack basic amenities such as clean water, sanitation, and electricity, affecting residents’ health and quality of life.

Transportation is another challenge. Increased traffic congestion causes pollution, longer commute times, and higher stress levels. Cities need efficient public transportation systems to reduce these problems and lower carbon emissions.

Urbanization also impacts the environment. Expanding cities consume large amounts of land and resources, leading to habitat destruction and increased waste generation. Sustainable urban planning is essential to balance development with environmental protection.

Moreover, social inequality tends to increase in rapidly urbanizing areas. Economic disparities can lead to crime, poor education, and limited access to healthcare. Addressing these issues requires inclusive policies that promote equal opportunities for all residents.

In conclusion, urbanization is a complex process with both benefits and drawbacks. Effective management and planning are necessary to create livable, sustainable cities for the future. Renewable energy sources, such as solar, wind, hydro, and geothermal power, are essential for addressing the world’s growing energy demands while reducing environmental impact. Unlike fossil fuels, renewable energy is sustainable and produces little to no greenhouse gas emissions.

Solar energy harnesses the power of the sun using photovoltaic panels. It is abundant and widely available, making it a popular choice for both residential and industrial use. Wind energy utilizes turbines to convert wind into electricity. Wind farms can be located onshore or offshore, providing significant amounts of clean energy.

Hydropower generates electricity by using flowing water to spin turbines. It is one of the oldest and most reliable renewable sources but can have ecological impacts on aquatic life and local communities. Geothermal energy taps into heat from the Earth’s core to produce power and heat buildings.

Despite the benefits, renewable energy faces challenges such as intermittency, where energy production depends on weather conditions. Energy storage technologies like batteries are improving to help manage this issue. Additionally, the initial costs of installing renewable energy systems can be high, though prices continue to decrease with technological advancements.

Governments worldwide are promoting renewable energy through policies, incentives, and research funding to accelerate the transition from fossil fuels. Embracing renewable energy is critical to combating climate change and ensuring a sustainable future. Genetic engineering is a rapidly advancing field that involves modifying the DNA of organisms to achieve desired traits. This technology holds great promise for medicine, agriculture, and environmental conservation. However, it also raises complex ethical questions.

In medicine, genetic engineering can potentially cure genetic disorders by correcting faulty genes. It can also be used to create personalized treatments based on an individual’s genetic makeup. Despite these benefits, concerns exist about the long-term effects and unintended consequences of altering human genes, especially in embryos.

In agriculture, genetically modified crops can increase yield, resist pests, and tolerate harsh environmental conditions. This could help address food shortages and reduce pesticide use. However, the safety of genetically modified organisms (GMOs) for human consumption and their impact on biodiversity remain topics of debate.

Environmental applications include engineering organisms to clean up pollution or combat invasive species. While innovative, these approaches require careful assessment to prevent ecological imbalance.

Ethical considerations also include issues of consent, access, and equity. Who controls the technology and who benefits from it? There are fears that genetic engineering could exacerbate social inequalities or lead to “designer babies” with selected traits.

In conclusion, while genetic engineering offers remarkable possibilities, society must carefully weigh the ethical implications. Responsible research, regulation, and public dialogue are essential to ensure this technology is used for the common good. Social media has revolutionized the way people communicate and share information. Platforms like Facebook, Twitter, Instagram, and TikTok enable instant connectivity across the globe, transforming social interactions, business, and politics.

One significant advantage of social media is the ability to connect with friends and family regardless of distance. It also allows people to meet new individuals with shared interests, fostering online communities. Businesses use social media for marketing and customer engagement, expanding their reach effectively.

However, social media presents challenges as well. The rapid spread of misinformation and fake news can influence public opinion and create social divisions. Privacy concerns arise due to the vast amount of personal data shared online, sometimes without full awareness.

Moreover, excessive use of social media can impact mental health, contributing to anxiety, depression, and feelings of loneliness. The desire for validation through likes and comments may affect self-esteem, especially among young users.

Social media also changes the way news is consumed, with brief posts often replacing in-depth analysis. This shift can reduce critical thinking and increase polarization.

In conclusion, social media is a powerful tool with both positive and negative effects on communication. Users must navigate it responsibly, and ongoing efforts are needed to address its societal impacts.

`
  };

  let timer = null;
  let totalTime = 60;
  let timeLeft = 60;
  let testText = '';
  let startTime = null;
  let finished = false;

  // History from localStorage
  function loadHistory() {
    const hist = JSON.parse(localStorage.getItem('typingTestHistory') || '[]');
    historyList.innerHTML = '';
    if(hist.length === 0) {
      historyList.innerHTML = '<li>No history yet.</li>';
      return;
    }
    hist.slice(-5).reverse().forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `Time: ${entry.time} min | WPM: ${entry.wpm} | Accuracy: ${entry.accuracy}% | Date: ${new Date(entry.date).toLocaleString()}`;
      historyList.appendChild(li);
    });
  }

  function saveHistory(wpm, accuracy, time) {
    const hist = JSON.parse(localStorage.getItem('typingTestHistory') || '[]');
    hist.push({wpm, accuracy, time, date: new Date().toISOString()});
    localStorage.setItem('typingTestHistory', JSON.stringify(hist));
  }

  function renderText() {
    textDisplay.innerHTML = '';
    testText.split('').forEach(char => {
      const span = document.createElement('span');
      span.innerText = char;
      span.classList.add('char', 'default');
      textDisplay.appendChild(span);
    });
  }

  function updateTimer() {
    if(timeLeft <= 0) {
      endTest();
      return;
    }
    timeLeft--;
    const mins = Math.floor(timeLeft / 60).toString().padStart(2,'0');
    const secs = (timeLeft % 60).toString().padStart(2,'0');
    timeLeftSpan.textContent = `${mins}:${secs}`;
  }

  function calculateResults() {
    const input = inputArea.value;
    let correctChars = 0;
    const spans = textDisplay.querySelectorAll('span');

    spans.forEach((span, i) => {
      if(i < input.length) {
        if(input[i] === testText[i]) {
          span.className = 'char correct';
          correctChars++;
        } else {
          span.className = 'char incorrect';
        }
      } else {
        span.className = 'char default';
      }
    });

    const accuracy = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 0;
    const timeSpentMinutes = (totalTime - timeLeft) / 60;
    const wordsTyped = input.trim().split(/\s+/).filter(w => w.length > 0).length;
    const wpm = timeSpentMinutes > 0 ? Math.round(wordsTyped / timeSpentMinutes) : 0;

    return {accuracy, wpm};
  }

  function startTest() {
    // Reset
    finished = false;
    inputArea.disabled = false;
    inputArea.value = '';
    inputArea.focus();
    totalTime = parseInt(timeSelect.value) * 60;
    timeLeft = totalTime;
    const level = levelSelect.value;
    testText = texts[level];
    renderText();

    // Timer display
    const mins = Math.floor(timeLeft / 60).toString().padStart(2,'0');
    const secs = (timeLeft % 60).toString().padStart(2,'0');
    timeLeftSpan.textContent = `${mins}:${secs}`;

    wpmSpan.textContent = '0';
    accuracySpan.textContent = '0%';

    clearInterval(timer);
    timer = setInterval(() => {
      updateTimer();
      const {accuracy, wpm} = calculateResults();
      accuracySpan.textContent = accuracy + '%';
      wpmSpan.textContent = wpm;
    }, 1000);
  }

  function endTest() {
    finished = true;
    clearInterval(timer);
    inputArea.disabled = true;
    const {accuracy, wpm} = calculateResults();
    accuracySpan.textContent = accuracy + '%';
    wpmSpan.textContent = wpm;
    saveHistory(wpm, accuracy, totalTime / 60);
    loadHistory();
    alert(`Time's up!\nYour WPM: ${wpm}\nAccuracy: ${accuracy}%`);
  }

  startBtn.addEventListener('click', () => {
    if(finished === false && inputArea.value.length > 0) {
      if(!confirm('Test is running. Do you want to restart?')) return;
    }
    startTest();
  });

  inputArea.addEventListener('input', () => {
    if(finished) return;
    calculateResults();
  });

  // Initialize
  loadHistory();
