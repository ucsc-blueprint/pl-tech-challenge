const cards = `[
    {
        "ques": "How much of a house cat's genome is tiger",
        "ans": 95.6,
        "img": "https://images.unsplash.com/photo-1496806195556-91bdded94209?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'g',
    },
    {
        "ques": "What behavior do cats share with tigers",
        "ans": "scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking",
        "img": "https://images.unsplash.com/photo-1680924726448-9f499055fb88?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'g',
    },
    {
        "ques": "What is true about cat's vision when compared to humans",
        "ans": "Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans",
        "img": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'n',
    },
    {
        "ques": "How many toes do cats have",
        "ans": "Generally 18 toes",
        "img": "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'g',
    },
    {
        "ques": "How high can cats jump",
        "ans": "6 times their height",
        "img": "https://images.unsplash.com/photo-1566513317351-c6d7be11505e?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'g',
    },
    {
        "ques": "What's difference about cats' collarbones",
        "ans": "They don't connect to other bones due to being burries in their shoulder muscles",
        "img": "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'n',
    },
    {
        "ques": "Why do cats stare at you with their mouth open",
        "ans": "Cats have an extra organ that allows them to taste scents on the air",
        "img": "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'g',
    },
    {
        "ques": "What do cats use their tails for",
        "ans": "To balance themselves when they're jumping or walking along narrow ledges.",
        "img": "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'g',
    },
    {
        "ques": "Why should you never cut a cat's wiskers",
        "ans": "Cats use their whiskers to determine which small spaces they can fit into.",
        "img": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'n',
    },
    {
        "ques": "Why do cats often not see what right under their nose",
        "ans": "Cats vision doesn't include the area right under their nose",
        "img": "https://images.unsplash.com/photo-1549545931-59bf067af9ab?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'c',
    },
    {
        "ques": "T or F: A litter of kittens can have multiple fathers",
        "ans": "True because female cats release multiple eggs when they are in heat",
        "img": "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'c',
    },
    {
        "ques": "What do cats do most of the time that they are awake",
        "ans": "Cats spend 1/3 of their time awake cleaning themselves",
        "img": "https://images.unsplash.com/photo-1526509177308-2073fcfbf0b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'n',
    },
    {
        "ques": "How fast are cats",
        "ans": "Average house cats can run up to 30 miles per hour; faster than Usain Bolt at his fastest (27.8 mph)",
        "img": "https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'c',
    },
    {
        "ques": "Whats special about cat's noses",
        "ans": "Cats' noese have patterns that are unique like human fingerprints",
        "img": "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'n',
    },
    {
        "ques": "What's special about cat's purr'",
        "ans": "They're believed to have healing properties. Their has a frequency between 25 and 250 Hz. This frequency is shown to promote healing in.",
        "img": "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'c',
    },
    {
        "ques": "How high can cats fall and survive",
        "ans": "Cats have been known to survive falls as high as 32 stories",
        "img": "https://images.unsplash.com/photo-1610015476997-5c12bd2a3059?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'c',
    },
    {
        "ques": "How many different sounds does the cat language include",
        "ans": "100 different sounds",
        "img": "https://images.unsplash.com/photo-1547955922-85912e223015?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'c',
    },
    {
        "ques": "How many of cats in animal shelters are adopted",
        "ans": "Only 27% 😢",
        "img": "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        "category": 'c',
    },
]`;