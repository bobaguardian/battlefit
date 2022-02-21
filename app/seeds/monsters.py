from app.models import db, Monster


def seed_monsters():
    ### LEVEL 1 ###
    goblin = Monster(name="Goblin", level=1, image="https://battle-fit.s3.amazonaws.com/c9944a276ef5454293dc3a0999f61a3f.jpg", description="Goblins are legendary creatures that have appeared in fairy tales and folklore from different cultures for centuries. They share many traits with gnomes and elves, most notably their small stature, pointed ears and their natural inclination towards magic. The nature of goblins seems to vary with every source, but they are most often described as being mischievous fey creatures or even spirits that play mean pranks on humans and like to steal money and treasure from them.")
    gnome = Monster(name="Gnome", level=1, image="https://battle-fit.s3.amazonaws.com/bbc784845c11429d80c76702f241f845.jpg", description="A Gnome is a dwarfish earth spirit who guards mines of precious treasures hidden in the earth. They are on average 15cm tall and tend to live in hilly meadows and rocky woodlands. Most Gnomes are 7 times stronger than a man, can run at speeds of 35 miles per hour, and have better sight than a hawk.")
    fairy = Monster(name="Fairy", level=1, image="https://battle-fit.s3.amazonaws.com/938cc959fff24c72bec036fb016ceeb6.jpg", description="Fairies have taken a wide variety of forms within European folklore and literature. Some fairies are beautiful and graceful and others arehideous to look upon. In modern times the term fairy is most commonly used to describe beautiful, feminine-looking fairies that tend to have the wings of a butterfly or other flying insect, while other beings traditionally thought of as types of fairies that don't match this description tend to go by more specific names.")
    golem = Monster(name="Golem", level=1, image="https://battle-fit.s3.amazonaws.com/44f43c8fd48b46f084ac1bfaf43283e7.png", description="A golem is a creature that has been constructed via magic as a servant or protector for the person who created it. The body of a golem is normally constructed from a single raw material, such as rock or clay. Golems are unintelligent, mindless entities and cannot act on their own. They also will not obey anyone other than the person who created them.")
    harpy = Monster(name="Harpy", level=1, image="https://battle-fit.s3.amazonaws.com/06ade624cc434412b336e43fad778fab.jpg", description="A harpy is a semi-humanoid monster that originates from Greek and Roman mythology. This creature appears to have a human face and torso with clear feminine features, but possesses large feathered wings (either on its back or in place of its arms) and its legs end in the sharp talons found on birds of prey. The name harpy means snatcher, an appropriate monniker as these creatures are said to steal food from their victims while eating.")
    merfolk = Monster(name="Merfolk", level=1, image="https://battle-fit.s3.amazonaws.com/113072c54662471a8c032a79e06ae9b0.png", description="Merfolk are legendary aquatic creatures with humanoid upper bodies and fish-like tails comprising their lower bodies. These beings have appeared in myths, legends and fairy tales all over the world. Merfolk are associated with perilous events such as floods, storms, shipwrecks, and drownings. In other folklore traditions they can be benevolent or beneficent, bestowing boons or falling in love with humans. They are commonly depicted as being highly attractive with long flowing hair and are often associated with the Sirens.")
    centaur = Monster(name="Centaur", level=1, image="https://battle-fit.s3.amazonaws.com/f8f20cbf91b9468fbe8e1eda0bc74da7.jpg", description="A centaur is an intelligent magical being that originates from Greek mythology. It appears to have an equine body similar to a horse, but has a humanoid upper body extending from where a horse's neck and head would be. These legendary creatures have featured in numerous forms of modern fantasy literature and other media,  commonly being described as benevolent and living in harmony with nature, hiding away from humans.")
    zombie = Monster(name="Zombie", level=1, image="https://battle-fit.s3.amazonaws.com/e8e2f27af3ae4879bc6d4c7b55a2b5f2.jpg", description="Zombies are among the most popular types of monsters recognised in today's society. They are corpses of once living creatures that have been reanimated by outside forces. The term zombie, is often figuratively applied to describe a hypnotized person bereft of consciousness and self-awareness, yet ambulant and able to respond to surrounding stimuli.")
    troll = Monster(name="Troll", level=1, image="https://battle-fit.s3.amazonaws.com/bb3bdedd12a74b828405c60febe245d8.jpg", description="Trolls are hulking, giant humanoid monsters that have appeared in various forms of literature and other media. These creatures actually originate from Norse mythology and were said to be aggressive, tribal giants that dwelled in caves and on mountains. The appearance of trolls often varies, but commonly they are described as being large, bulky creatures similar to ogres with dirty skin tones, little clothing save for an animal-skin loincloth, little to no hair and gnarled teeth and tusks. Trolls are also commonly regarded as dim-witted brutes and are believed to eat humans. In many works of fiction and in Scandinavian folklore, trolls are also stated to magically turn to stone when they are exposed to sunlight.")
    fresno_nightcrawler = Monster(name="Fresno Nightcrawler", level=1, image="https://battle-fit.s3.amazonaws.com/52dca2a1dd3a4654a235bcef951f94d6.jpg", description="The Fresno nightcrawler, also known as the Fresno alien, is a cryptid that has made two appearances so far, one in Fresno, California and the other in Yosemite National Park, also in California. In both sightings, it's only seen in video footage. Fresno nightcrawlers appear to be relatively short creatures (approx. 1.5 meters) with most of their height being made up of their legs as they possess an extremely small upper body. It is hard to find details in the upper body of the cryptid due to the poor quality of the footage. It is an extremely thin, white humanoid with no discernible arms. ")
    kappa = Monster(name="Kappa", level=1, image="https://battle-fit.s3.amazonaws.com/7b44e660831544649c499444408caaab.jpg", description="Kappa are aquatic reptilian humanoids who inhabit the rivers and streams found all over Japan. Clumsy on land, they are at home in the water, where they thrive during the warm months. They are excellent swimmers, and despite their small size they are physically stronger than a grown man.")
    tengu = Monster(name="Tengu", level=1, image="https://battle-fit.s3.amazonaws.com/0a785495f5654ea59fb4a34b65da5b06.png", description="Tengu are winged Japanese mountain and forest yōkai, which also sometimes take on a divine role as messengers or occaisionally deities themselves. Typically Tengu has human torso, wings, and a bird's head with vague resemblance of a human being. Sometimes they are depicted in almost fully avian form, but able to manipulate objects such as weapons, or almost fully human form with unnaturally long nose, or a combination from all of these.")
    leprechaun = Monster(name="Leprechaun", level=1, image="https://battle-fit.s3.amazonaws.com/e158be3939c949d8905e5ab22ec8f9b1.png", description="A leprechaun is a fairy-like creature in Irish mythology. They are often mischievous creatures who spend their time making shoes or hiding away their coins in hidden pots of gold at the end of rainbows. Leprechauns may grant wishes to humans who capture them.")
    kelpie = Monster(name="Kelpie", level=1, image="https://battle-fit.s3.amazonaws.com/30a0b22cb2914d8c9a68b1a41dcaf480.png", description="The Kelpie is a supernatural creature from Celtic Folklore. It is believed to haunt the rivers and lakes of Scotland and Ireland. It is usually black, although it can be white as well. It appears as a horse or pony, although its mane is always dripping water or tangled with seaweed. They are also known to transform into beautiful woman to lure young men into traps, usually into water so it can eat them. A Kelpie has the strength of 10 regular horses.")
    oni = Monster(name="Oni", level=1, image="https://battle-fit.s3.amazonaws.com/5096e60d2eec4023ad40304731d95309.jpg", description="Oni are evil spirits from Japanese mythology and folklore. Oni are typically large in size, possess superhuman strength, and are terrifying in appearance, and are associated with disease, calamity and misfortune. Oni are found in countless Japanese stories and myths, where they tend to be depicted as roguish villains.")
    selkie = Monster(name="Selkie", level=1, image="https://battle-fit.s3.amazonaws.com/2615edb851f14ac9868b49e498439871.jpg", description="Selkies meaning Seal Folk, are mythological beings capable of therianthropy, changing from seal to human form by shedding their skin. While selkies is the proper term for such shapeshifters according to an Orcadian folklorist, treatises on Shetland refer to them merely as mermen or merwomen.")
    hippocampus = Monster(name="Hippocampus", level=1, image="https://battle-fit.s3.amazonaws.com/b1ef7cc4d9764dd6b9a17bc89ee36f55.jpg", description="The Hippocampus is a mythological creature shared by Greek, Phoenician, Etruscan, and Roman mythology. The hippocamp is depicted as a sea creature with the upper body of a horse with the lower body of a fish. In Greek mythology, hippocamps are often seen as mounts for gods and other sentient creatures of the sea. Poseidon and Triton have their chariots drawn by hippocamps.")
    dijiang = Monster(name="Dijiang", level=1, image="https://battle-fit.s3.amazonaws.com/3e9c649d9bfd4a42a71ba9f23195fec2.jpg", description="The DiJiang is a mountain patron god in Chinese Mythology. It is described as having a yellow sack-like physique with a red aura of cinnabar, encompassing an emptiness like the cosmos. It has six legs and four wings, but no eyes or facial features of any kind, indicating directionless movement. It lives in a perpetual state of confusion and causes chaos wherever it goes. It's said to be fond of singing and dancing.")

    db.session.add(goblin)
    db.session.add(gnome)
    db.session.add(fairy)
    db.session.add(golem)
    db.session.add(harpy)
    db.session.add(merfolk)
    db.session.add(centaur)
    db.session.add(zombie)
    db.session.add(troll)
    db.session.add(fresno_nightcrawler)
    db.session.add(kappa)
    db.session.add(tengu)
    db.session.add(leprechaun)
    db.session.add(kelpie)
    db.session.add(oni)
    db.session.add(selkie)
    db.session.add(hippocampus)
    db.session.add(dijiang)


    ### LEVEL 2 ###
    minotaur = Monster(name="Minotaur", level=2, image="https://battle-fit.s3.amazonaws.com/47a293bc14684361819f08c675fe02bb.jpg", description="The Minotaur was a Greek monster that was part man and part bull. It lived in the centre of a Labyrinth on the island of Crete, built by Daedalus to hold the Minotaur from causing destruction. The Minotaur is often described by writers as the ancient Greeks' way of describing and representing the one's constant fight against their inner beast, and their struggle to control it.")
    wyvern =	Monster(name="Wyvern", level=2, image="https://battle-fit.s3.amazonaws.com/a09bdb4d4cd64645be64d98d8956407c.jpg", description="A Wyvern is a type of winged reptilian beast similar to a dragon in appearance, though it only has two legs whereas dragons have four. These dreadful creatures were thought to pollute the earth over which they traveled. In their wake the grass was marked and fungus grew, while loathsome slime or distorted creatures spawned.")
    griffin =	Monster(name="Griffin", level=2, image="https://battle-fit.s3.amazonaws.com/301dd26e46f94afe83eab7e36ddcae35.jpg", description="The Griffin is a legendary creature from Egyptian, Mesopotamian, Persian, Minoan, Greek, and Roman mythology that has the body of a lion and the head and wings of an eagle. Since the lion was considered the King of the Beasts and the eagle the King of the Air, the griffin was thought to be an especially powerful and majestic creature with both royal and divine associations.")
    yeti =	Monster(name="Yeti", level=2, image="https://battle-fit.s3.amazonaws.com/e0775177a64f4851b9a23ce942eecf3a.jpg", description="The Yeti, sometimes referred to as the Abominable Snowman amongst many other names, is a Bigfoot-like cryptid said to inhabit the Himalayan Mountains of Nepal. Although several supposed samples of its hair and tissue have been recovered, and footprints alleged to belong to it have been recorded, these have for the most part been proven to belong to known animals. This leaves the existence of the Yeti in serious doubt, at least amongst the modern scientific community.")
    vampire =	Monster(name="Vampire", level=2, image="https://battle-fit.s3.amazonaws.com/e72735e7e0d44002bcc1dd373b9ac8aa.jpg", description="A vampire is a being from folklore who subsists by feeding on the life essence (generally in the form of blood) of the living. In European folklore, vampires were undead beings that often visited loved ones and caused mischief or deaths in the neighbourhoods they inhabited when they were alive. They wore shrouds and were often described as bloated and of ruddy or dark countenance, markedly different from today's gaunt, pale vampire which dates from the early 19th century.")
    sphinx =	Monster(name="Sphinx", level=2, image="https://battle-fit.s3.amazonaws.com/5f42585207ae4572b375065e5854b468.png", description="The Sphynx (also spelt Sphinx) is a hybrid creature depicted with the body of a lion and the head of a human.There are two major depictions of the Sphynx. The Egyptian depiction has the head of the king whose tomb it guards, the most note worthy of these being the Pharaohs of ancient Egypt. The Greek version had the head of a woman and would ask people who walked by its territory, just outside the town of Thebes, a riddle.")
    cyclops =	Monster(name="Cyclops", level=2, image="https://battle-fit.s3.amazonaws.com/bfef9766e0754c45a11b1a6271bee6b2.jpg", description="Cyclops are one-eyed giants who first appeared in Greek mythology. They are also compared to giants due to their huge size. A Cyclops is probably about 15 to 25 feet tall.")
    pegasus =	Monster(name="Pegasus", level=2, image="https://battle-fit.s3.amazonaws.com/250b2aa0d6af4276a82a31a2d81bcb78.png", description="Pegasus is a mythical, winged, divine stallion and one of the most recognized creatures in Greek mythology. Sired by the ocean god Poseidon, this noble beast was birthed by the gorgon Medusa when she was slain by the hero Perseus. Greco-Roman poets write about his ascent to heaven after his birth and his obeisance to Zeus, king of the gods, who instructed him to bring lightning and thunder from Olympus. Friend of the Muses, Pegasus is the creator of Hippocrene, the fountain on Mt. Helicon.")
    werewolf =	Monster(name="Werewolf", level=2, image="https://battle-fit.s3.amazonaws.com/9a426ffc24d1454899d5e7ac99e0b589.jpg", description=" A Werewolf - also known as a lycanthrope - is a legendary creature that is said to have originated from European folklore. It is a human being that has the ability to alter its form into a wolf-like animal typically when there is a full moon, gaining unnatural strength and enhanced senses through its transformation.")
    jersey_devil =	Monster(name="Jersey Devil", level=2, image="https://battle-fit.s3.amazonaws.com/de809413f6c74fd68dd2caf6e717ad41.png", description="The Jersey Devil is a creature native to the Pine Barrens of New Jersey. It is often described as having hooves, a snake's tail, bat-wings and a head that looks something like a horse. While there are many stories detailing the origin of the Jersey Devil, sightings have been reported beginning in the 1700s and continuing on until the past decade. The creature is deeply rooted in folklore and legend in the area, and is still mildly popular in various media, from sports teams to video games.")
    mothman =	Monster(name="Moth Man", level=2, image="https://battle-fit.s3.amazonaws.com/22cb915e5e64413e8c60ff8d8fe3c916.jpg", description="The Mothman is a cryptid reportedly seen in the Point Pleasant area of West Virginia from 15 November 1966 to 15 December 1967. It is a strange flying cryptid that has been sighted numerous times, most of the time before a disaster hits the area of ​​the sighting. It is described as tall, with large bat or moth wings, no neck, and large bright red eyes. It is sometimes described as human in form and sometimes birdlike. His appearances seem to be closely related to the imminence of great catastrophes, being sometimes defined as a harbinger of misfortunes and death. The Mothman casuistry is tangentially related to ufology, as its appearances supposedly coincide with observations of UFOs.")
    wendigo =	Monster(name="Wendigo", level=2, image="https://battle-fit.s3.amazonaws.com/02ee2f8449eb473698e9e187164b5d7e.jpeg", description="The Wendigo originates from Native-American legend, and is said to be a demonic half-beast as told by the Algonquian peoples along the Atlantic coast of the USA and Canada. They are seen as malevolent, cannibalistic, supernatural beings of great spiritual power who were strongly associated with the Winter, the North, and coldness, as well as famine and starvation.")
    banshee =	Monster(name="Banshee", level=2, image="https://battle-fit.s3.amazonaws.com/89765c5dc4aa469889428cc689c24047.jpg", description="The Banshee is a female spirit and is considered to be an omen of death. who heralds the death of a family member, usually by wailing, shrieking, crying and keening when she predicts death. The Banshee is also known to wash the bloodstains from clothes, an omen of death. Banshees are seen in three forms. A young, beautiful woman, a matronly figure or a distressed hag. Banshees are frequently described as dressed in white or grey, often having long, pale hair which they brush with a silver comb.")
    makami =	Monster(name="Makami", level=2, image="https://battle-fit.s3.amazonaws.com/215274fbac9b4ac6be751148a6c20674.jpg", description="Makami is deification of a Japanese wolf which is now extinct. Makami has traditionally been worshipped as a sacred beast. Having eaten many people, an old wolf living in Makaminohara of Asuka area in Yamato Province (present-day Nara Prefecture) was deified for its ferocity and worshipped as a guardian deity who would protect crops against wild boars and deer. It was worshipped as a deity who would understand human words, know the nature of each human being, protecting the good and punish the wicked.  The sacredness of makami fell into decline as the number of wolves decreased.")
    chimera =	Monster(name="Chimera", level=2, image="https://battle-fit.s3.amazonaws.com/43a5af6245d646be99dbf64b447a8692.jpg", description="The Chimera is a legendary magical beast from Greek mythology. The beast is a hybrid of sorts, though it appears as a haphazard mish-mash of other animals. According to the original Greek mythos, this creature possessed the head and body of a lion, the head of a goat arising from its back and had a snake's head at the end of its tail. The Chimera has been reimagined in a number of ways with different animal parts being added or rearranged.")
    amarok =	Monster(name="Amarok", level=2, image="https://battle-fit.s3.amazonaws.com/4aa82e86bcd6453cbd8a977778f07a0b.jpg", description="Amarok is an antagonistic figure found in the mythology of the Inuits and seems to be example of a nocturnal spirit designed discourage people from wandering off alone at night. Amarok is believed to be a gigantic wolf that will track down those who are foolish enough to hunt alone at night and devour them, unlike real wolves Amarok always hunts alone and may either be considered a type of cryptid or a supernatural creature depending on on one's view on the myth.")
    kitsune =	Monster(name="Kitsune", level=2, image="https://battle-fit.s3.amazonaws.com/d1638860660c4662beb178e258829cb8.jpg", description="Kitsune is the Japanese word for fox. Stories depict legendary foxes as intelligent beings and as possessing paranormal abilities that increase with their age and wisdom. According to Yōkai folklore, all foxes have the ability to shapeshift into human form. While some folktales speak of kitsune employing this ability to trick others – as foxes in folklore often do – other stories portray them as faithful guardians, friends, lovers, and wives. The more tails a kitsune has – they may have as many as nine – the older, wiser, and more powerful it is. Conversely foxes were often seen as witch animals, especially during the superstitious Edo period (1603–1867), and were thought of as goblins who could not be trusted.")
    nue =	Monster(name="Nue", level=2, image="https://battle-fit.s3.amazonaws.com/1664c05ac69541d2bd0379214c15caf0.jpg", description="The Nue is one of the oldest yokai recorded, having its first appearance in the Kojiki (712 CE), an account of the early histories of Japan. It also appears in the Heian-period encyclopedia Wamyo Ruijusho (938 CE), and again in the Heike Monogatari (1371 CE), a record of one of Japan’s bloodiest civil wars and most tragic family clans. It has the legs of a tiger, the tail of a snake, the body of a tanuki and the head of a monkey. It is said to bring bad luck and spread disease.")
    baihu =	Monster(name="Baihu", level=2, image="https://battle-fit.s3.amazonaws.com/14043cfaeea24a61beea9b9b7c0286c7.jpg", description="The White Tiger, known in Chinese as Baihu, is one of the Four Symbols of the Chinese constellations. It is sometimes called the White Tiger of the West representing the west in terms of direction and the autumn season.  It was said that the white tiger would only appear when the emperor ruled with absolute virtue or if there was peace throughout the world.")

    db.session.add(minotaur)
    db.session.add(wyvern)
    db.session.add(griffin)
    db.session.add(yeti)
    db.session.add(vampire)
    db.session.add(sphinx)
    db.session.add(cyclops)
    db.session.add(pegasus)
    db.session.add(werewolf)
    db.session.add(jersey_devil)
    db.session.add(mothman)
    db.session.add(wendigo)
    db.session.add(banshee)
    db.session.add(makami)
    db.session.add(chimera)
    db.session.add(amarok)
    db.session.add(kitsune)
    db.session.add(nue)
    db.session.add(baihu)

    ### LEVEL 3 ###
    western_dragon = Monster(name="Western Dragon", level=3, image="https://battle-fit.s3.amazonaws.com/a2f06a0d5de746378865016ce3511ebd.jpg", description="Dragons are huge reptilian creatures that move on four legs and have tremendous bat-like wings enabling them to fly. Whereas some tales of these creatures depict them as being savage and bestial, others still have described them as being highly intelligent, even more so than humans. As far as abilities go, dragons are among the strongest creatures believed to have existed. Their scales serve as natural armour that can deflect most blows; they are capable of flight and can remain airborne for days on end. They live extremely long lives, said to be in the range of a thousand years, perhaps more.")
    fenrir = Monster(name="Fenrir", level=3, image="https://battle-fit.s3.amazonaws.com/60e7997c770d4dc085f8959ee5113a5f.jpg", description="Fenrir is a great monstrous wolf spoken of in Norse mythology. He’s the son of the Aesir, Loki and the jötunn, Angrboða. Fearing Fenrir’s strength and knowing that only evil could be expected of him, the gods bound him with a magical chain made of the sound of a cat’s footsteps, the beard of a woman, the breath of fish, and other occult elements. Poets speak apprehensively of the day when he will break loose.")
    hydra = Monster(name="Hydra", level=3, image="https://battle-fit.s3.amazonaws.com/34f14a200fe7460a96210234f10b9a82.jpg", description="The Hydra is a monstrous, multi-headed reptile from the myths of Ancient Greece. It made its lair in Lake Lerna. According to the myth, beneath the lake was an entrance to the Underworld, and the Hydra was it's guardian. Most of the time, it stayed in the spring of Amymone, a deep cave , only coming out to terrorize neighboring villages. ")
    cerberus = Monster(name="Cerberus", level=3, image="https://battle-fit.s3.amazonaws.com/5cd0f47997e64f7489fc98c6fca7a4c2.jpg", description="In Greco-Roman mythology, Cerberus was the guardian to the Gates of Hades. Should any souls try to flee across the Styx, this terrifying hellhound will pursue them and drag them back. This monster has been envisioned as having more than just three heads.")
    phoenix = Monster(name="Phoenix", level=3, image="https://battle-fit.s3.amazonaws.com/338c9a14e7c647ebb759fbb345b676d9.jpg", description="The phoenix is a legendary magical bird originating from Greek mythology. It has long been associated with the sun and is viewed as a symbol of renewal and rebirth. This creature has become widely popular, featuring in countless sources of fantasy fiction. The feathers covering its body come in bright hues of red and orange, making it appear to be made of fire. When nearing the end of its lifespan, a phoenix becomes sickly and starts molting heavily.")
    loch_ness = Monster(name="Loch Ness", level=3, image="https://battle-fit.s3.amazonaws.com/d9bda62717a84e3bbe6be381a8b748d7.png", description="In Scottish folklore, the Loch Ness Monster or Nessie is a creature said to inhabit Loch Ness in the Scottish Highlands. It is often described as large in size with a long neck and one or more humps protruding from the water. Popular interest and belief in the creature has varied since it was brought to worldwide attention in 1933. Evidence of its existence is anecdotal, with a few disputed photographs and sonar readings. ")
    kraken = Monster(name="Kraken", level=3, image="https://battle-fit.s3.amazonaws.com/35204b67a4c745cbbf9d66a58619c5d9.jpg", description="The kraken is a legendary sea-monster of enormous proportions. Described as a cephalopod resembling a giant octopus or squid, this beast is said to be capable of enveloping whole ships in the grasp of its tentacles and dragging them beneath the depths. Kraken have been spoken of in sailors' tales and featured in various works of fiction since the 13th century and remain a common theme in popular culture today. These monsters are said to dwell off the coasts of Norway and Greenland.")
    medusa = Monster(name="Medusa", level=3, image="https://battle-fit.s3.amazonaws.com/bfc8e5372c4e48a3be717b89b9e17198.jpg", description="Medusa is a creature in Greek mythology, and one of the three Gorgon sisters. She was punished by Athena, turning her beautiful hair into snakes and giving her the destructive power to turn anyone who looked directly at her into stone. She became the only one that was mortal, of which any who gaze into its eyes will turn to stone.")
    megalodon = Monster(name="Megalodon", level=3, image="https://battle-fit.s3.amazonaws.com/abb2d8a99a704841aae3a4a91ec1cd01.jpg", description="The Megalodon is a giant shark similar to a Great White shark due to the fact they lived the same life style, but they were not related. Living from 15.9 to 2.6 million years ago, during the Cenozoic Era, this shark is now known only from teeth. Because of this shortage of data, estimates vary regarding its likely size, though it is universally agreed that Megalodons could reach lengths of an excess of 50 ft to 54ft. Megalodon, meaning big tooth, had teeth at least 7 inches long and had a mouth that could expand to engulf an elephant whole. Although widely regarded to have gone extinct in the late Pliocene, some believe that they may survive to the present.")
    eastern_dragon = Monster(name="Eastern Dragon", level=3, image="https://battle-fit.s3.amazonaws.com/be91262b73e5497e95ddef36d95eef0e.jpg", description="Eastern dragons - also known as Chinese or Oriental dragons - exist primarily in the legends and myths of Asian nations. These beasts are of a more serpentine persuasion than European dragons, possessing long snake-like bodies with four limbs. Parts of the body are covered with tufts of thick fur and they often have long whiskers growing from their snouts. Eastern dragons have no wings, but they are still capable of flying. As they fly, they constantly twist and turn in elegant patterns as though they are swimming through the air. This dragon is considered a benevolent spirit of good fortune and holds power over water and the weather. It is also believed that they possess many other supernatural powers and are practically gods, with no established limit to what they can do. Such powers include telepathy, shape and size alteration and altering the laws of probability.")
    basilisk = Monster(name="Basilisk", level=3, image="https://battle-fit.s3.amazonaws.com/cc85711bbe18446da343822ca0a52733.png", description="The basilisk is said to be a deadly magical reptile described as the king of serpents in European legends. Basilisks supposedly have the ability to kill any creature instantly with a glance. Anyone that looks a basilisk directly in the eye will immediately keel over dead. As well as its deadly stare, basilisks supposedly ooze venom from their bodies and leave a trail of it wherever they go. Basilisk territory can be readily identified by dead animals and plants surrounding its lair, killed off by the creature's potent venom.")
    leviathan = Monster(name="Leviathan", level=3, image="https://battle-fit.s3.amazonaws.com/c4bc270236e341128996e5715a99e837.jpg", description="Leviathan is a sea serpent monster of immense size. The leviathan of the Middle Ages was used as an image of Satan, endangering both God's creatures - by attempting to eat them - and God's creation - by threatening it with upheaval in the waters of chaos. As the demon of envy, it's classified as one of the Seven Princes of Hell, corresponding to the seven deadly sins. Leviathan represents the element of water. The element of water in Satanism is associated with life and creation.")
    behemoth = Monster(name="Behemoth", level=3, image="https://battle-fit.s3.amazonaws.com/e025b7f24a02492e876da58305a07745.jpg", description="Behemoth is a large mythical land animal from Hebrew mythology mentioned in the Book of Job in the Hebrew bible. The literal translation of Behemoth is beast. Much later, during the Georgian and Victorian eras, some Christian and occult writers re-imagined the Behemoth as a giant elephant-like demon.")
    godzilla = Monster(name="Godzilla", level=3, image="https://battle-fit.s3.amazonaws.com/8faec3d474674c23b1f007f6f116eae9.jpg", description="Godzilla, known as the King of the Monsters, is a giant, prehistoric monster. Godzilla's appearance varies from film to film, but he has always resembled a giant dinosaur that stands upright like a human. Godzilla has three rows of maple leaf-shaped dorsal plates running down his back and generally possesses charcoal gray-colored skin.  Ishiro Serizawa theorized that Godzilla is the driving force to restore balance to nature whenever that balance is disrupted, suggesting that he essentially considers the entire Earth to be his territory.")
    king_kong = Monster(name="King Kong", level=3, image="https://battle-fit.s3.amazonaws.com/b113259c8917454abee3c5fb70fd6f2e.jpg", description="King Kong is a giant ape and one of the most iconic giant monsters in film history. King Kong is the last member of a species of giant prehistoric apes called Megaprimatus Kong. He remained secluded on a remote island populated by other giant creatures and was worshiped as a god by the island's natives. Kong's exact origins vary from film to film.")
    king_ghidorah = Monster(name="King Ghidorah", level=3, image="https://battle-fit.s3.amazonaws.com/a839e41ba16447d49f1bade2d5432b3a.jpg", description="King Ghidorah  is a giant three-headed dragon and Godzilla's arch-enemy. King Ghidorah is a large, three-headed, wyvern-like kaiju with two large wings and two tails. He is usually shown to be bigger than Godzilla in size.")
    rodan = Monster(name="Rodan", level=3, image="https://battle-fit.s3.amazonaws.com/7d7baf9ff02f4f8981d7873a7441459d.jpg", description="Rodan is an enormous pteranodons kaiju mutated by a high dose of radiation, the Rodans usually walk bipedally when not airborne. Some incarnations boast a spiked chest and belly, whilst in others this is replaced by plates of a hard, bone-like material, and all sport small horns protruding from their heads. The various versions have been presented as being between 50 and 100 metres tall, possessing a wingspan of 220 to 200 metres, and weighing between 15,000 and 24,000 tons.")
    nian = Monster(name="Nian", level=3, image="https://battle-fit.s3.amazonaws.com/cc9bdfeda5bd436a99845d5d066d760b.png", description="According to a Chinese legend a terrible monster (pictured sometimes with features of a lion, unicorn, and ox), a really giant, monstrous creature by the name of ‘Nian’ lived in the mountains and would come down at the end of the year to destroy the fields, crops and animals and to terrorize people or even kill them all. The Nian dance is performed annually on Chinese New Year's eve, and because the dance, now known as lion dance is thought to be so helpful or auspicious or both, it is performed on a lot more occasions to drive away the Nian")


    db.session.add(western_dragon)
    db.session.add(fenrir)
    db.session.add(hydra)
    db.session.add(cerberus)
    db.session.add(phoenix)
    db.session.add(loch_ness)
    db.session.add(kraken)
    db.session.add(medusa)
    db.session.add(megalodon)
    db.session.add(eastern_dragon)
    db.session.add(basilisk)
    db.session.add(leviathan)
    db.session.add(behemoth)
    db.session.add(godzilla)
    db.session.add(king_kong)
    db.session.add(king_ghidorah)
    db.session.add(rodan)
    db.session.add(nian)

    db.session.commit()

def undo_monsters():
    db.session.execute('TRUNCATE monsters RESTART IDENTITY CASCADE;')
    db.session.commit()
