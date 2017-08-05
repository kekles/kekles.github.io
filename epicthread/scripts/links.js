var links = new Object()
links.poopy = "Poopy";
links.serveronline = "ServerOnline";
links.warningwin = "stfu win";
links.religion = "Religion";
links.fuckingserious = "fucking serious";
links.leechownd = "leacher rofl";
links.trollfail = "troll fail";
links.typicalvirgin = "Virgin OWND";
links.punchher = "Punch Her";
links.Beatit = "Just Beat It";
links.H4X0R = "L33t h4x0r";
links.SucessfulTroll = "Succesful Troll is Successful";
links.ikiliki = "Iki-Nigger-Liki";
links.Mopman = "Mopman Ownd";
links.trollpoint = "Troll +1";
links.warnmyself = "Warning Myself.";
links.goodniggaz = "good niggaz";
links.counting = "Counting to 1000";
links.georgebooledeath = "George Boole Death";
links.rage = "RAGE!!!";
links.zezima = "Zezima story";
links.epicmod = "The badge suits you";
links.perfectword = "Perfectwod screen";
links.javacwork = "Javac isn't working!?!?!";
links.drunk = "Drunk...";
links.screwHammer = "Like screwing a screw with a hammer";
links.stringframework = "Bestest String Framework!!!!";
links.stopposting = "Epic tutorial...";
links.appreciated = "*appreciated";
links.rage2 = "RAGE!!! 2";
links.rage3 = "PM RAGE!!!";
links.errors100 = "100 errors";
links.photoshop = "How to photoshop";
links.goout = "Will you go out with me?";
links.javatroll = "Vista is THAT shitty";
links.youtube = "How to add movies";
links.bush = "Educated complete idiot";
links.prohacker = "Pro hacker";
links.april = "April Fools!!!";
links.fight = "Cool fighting story bro";
links.IEXPOLORER = "IEXPROER";
links.hacker = "Pro Hacker 2";
links.t4onbeach = "T4 on the Beach!!!";
links.fight2 = "Cool upcoming fight story bro";
links.honorscape = "Honorscape logo";
links.police = "Fuck tha Police";
links.drunk2 = "I'm going to my first party";
links.shutdown = "Shutdown";
links.reputation = "Reputation";
links.deletewinrar = "i deleted winrar";
links.polleo = "Programming team!";
links.happy = "How to get happy again";
links.bully = "Online bullying";
links.fatal = "FATAL PROGRAMS";
links.myhosting = "MyHosting VPS Problems";
links.heybrah = "Hey brah";
links.pickup = "Tips on Picking up Chicks"
links.thisbot = "This bot"
links.lava = "Making Everything Lava"
links.dumbposters = "What is with all the First time Posters being so dumb?"
links.booleanhandler = "BooleanHandler.java"
links.deleteserver = "How to delete your Server"
links.vagina = "Vagina"
links.ramram = "30GB of RAM?"
links.goodbye = "GOODBYE MOPARSCAPE"
links.applebug = "Apple bug"
links.forth = "4th July"
links.justice = "Justice"
links.rms = "RMS"
links.rainbowtext = "Rainbow Text"
links.notification = "iPhone Notification"
links.drhouse = "Dr House"

function gen_nav() {
	for (var key in links) {
		$('<a>',{
			id: key,
			text: links[key],
			href: '#' + key,
			onclick: "swap_image('" + key + "');"
		}).appendTo('#nav');
		$('<br />').appendTo('#nav');
	}
}
