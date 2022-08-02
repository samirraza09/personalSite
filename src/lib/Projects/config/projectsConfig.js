const projectsConfig = {
    projects: [
        {
            title: 'League of Legends Champion Data Generator',
            description: () => (
                <p>Created a <a href="https://www.python.org/">Python</a> script using the <a href="https://docs.python.org/3/library/urllib.html">urllib</a> and <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">BeautifulSoup</a> libraries to scrape data from <a href="https://www.op.gg/">op.gg</a> and produce the best setup for one of 155 characters. Used the <a href="https://discordpy.readthedocs.io/en/stable/">discord.py</a> library to convert the console application to a discord bot</p>
            ),            
            github: 'https://github.com/samirraza09/op.ggScraper/',
            youtubeEmbed: '6UUj89b666E',
            youtubeLink: 'https://www.youtube.com/watch?v=6UUj89b666E&ab_channel=SamirRaza',
        },
        {
            title: 'Ashe V Lucian',
            // description: 'Created a two-player shooting game with the pygame library in Python. Designed character models, snipped background images and sound effects to implement into the game.',
            description: () => (
                <p>Created a two-player shooting game with the <a href="https://www.pygame.org/news">pygame</a> library in <a href="https://www.python.org/">Python</a> Designed character models, snipped background images and sound effects to implement into the game.</p>
            ),
            github: 'https://github.com/samirraza09/HackED2021Proj',
            youtubeEmbed: 'Udw2xeaAo6U',
            youtubeLink: 'https://www.youtube.com/watch?v=Udw2xeaAo6U&ab_channel=SamirRaza',
        },
        {
            title: 'Hockey Statistics Analyzer',
            // description: 'In a 2 person team, created a python project utilizing the urllib and BeautifulSoup libraries to scrape data from hockeyreference.com; using various filters, users could request specific data (ex. best goal scorers or most most reliable defencement) which was analyzed in an object-oriented fashion.',
            description: () => (
                <p>In a 2 person team, created a <a href="https://www.python.org/">python</a> project utilizing the <a href="https://docs.python.org/3/library/urllib.html">urllib</a> and <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">BeautifulSoup</a> libraries to scrape data from <a href="https://www.hockeyreference.com">hockeyreference.com</a> ; using various filters, users could request specific data (ex. best goal scorers or most most reliable defencement) which was analyzed in an object-oriented fashion.</p>
            ),
            github: 'https://github.com/samirraza09/HackED',
            youtubeEmbed: 's0EOcoGkq10',
            youtubeLink: 'https://www.youtube.com/watch?v=s0EOcoGkq10&ab_channel=SamirRaza',
        },
        
    ]
};

export default projectsConfig;
