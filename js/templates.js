this["TVP"] = this["TVP"] || {};
this["TVP"]["templates"] = this["TVP"]["templates"] || {};
this["TVP"]["templates"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });;
this["TVP"] = this["TVP"] || {};
this["TVP"]["templates"] = this["TVP"]["templates"] || {};
this["TVP"]["templates"]["modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal fade\" id=\"guest-modal\"><!--\n  --><div class=\"modal-dialog\"><!--\n    --><div class=\"modal-content\"><!--\n      --><span data-dismiss=\"modal\" class=\"close fa fa-times\" area-hidden=\"true\"></span><!--\n      --><div class=\"modal-body\"><!--\n        --><div class=\"modal-pic\"><!--\n          --><img src=\"../img/bios/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ".jpg\"/><!--\n        --></div><!--\n        --><div class=\"modal-bio\"><!--\n          --><h1>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1><!--\n          --><p>";
  if (helper = helpers.bio) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.bio); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p><!--\n        --></div><!--\n      --></div><!--\n    --></div><!--\n  --></div><!--\n--></div>";
  return buffer;
  });;
this["TVP"] = this["TVP"] || {};
this["TVP"]["templates"] = this["TVP"]["templates"] || {};
this["TVP"]["templates"]["test_guest"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"guest\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><!--\n  --><div class=\"guest-name\">\n    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </div>\n  <div class=\"guest-overlay\"></div>\n  <div class=\"guest-image\">\n    <img src=\"img/bios/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ".jpg\"/>\n  </div>\n  <div class=\"guest-socials\">\n    ";
  stack1 = helpers['with'].call(depth0, (depth0 && depth0.socials), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n  </div><!--\n--></div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.ws), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fb), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tw), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.ig), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sc), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  \n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <a href=\"";
  if (helper = helpers.ws) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ws); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      \n      <div class=\"guest-social-"
    + escapeExpression((helper = helpers.countKeys || (depth0 && depth0.countKeys),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "countKeys", depth0, options)))
    + " guest-ws\">\n        <span class=\"fa fa-circle-o\"></span>\n      </div><!--\n --></a>";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<a href=\"";
  if (helper = helpers.fb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><!--\n   --><div class=\"guest-social-"
    + escapeExpression((helper = helpers.countKeys || (depth0 && depth0.countKeys),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "countKeys", depth0, options)))
    + " guest-fb\">\n        <span class=\"fa fa-facebook\"></span>\n      </div><!--\n --></a>";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<a href=\"";
  if (helper = helpers.tw) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.tw); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><!--\n   --><div class=\"guest-social-"
    + escapeExpression((helper = helpers.countKeys || (depth0 && depth0.countKeys),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "countKeys", depth0, options)))
    + " guest-tw\">\n        <span class=\"fa fa-twitter\"></span>\n      </div><!--\n --></a>";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<a href=\"";
  if (helper = helpers.ig) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ig); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><!--\n   --><div class=\"guest-social-"
    + escapeExpression((helper = helpers.countKeys || (depth0 && depth0.countKeys),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "countKeys", depth0, options)))
    + " guest-ig\">\n        <span class=\"fa fa-instagram\"></span>\n      </div><!--\n --></a>";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "<a href=\"";
  if (helper = helpers.sc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><!--\n   --><div class=\"guest-social-"
    + escapeExpression((helper = helpers.countKeys || (depth0 && depth0.countKeys),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "countKeys", depth0, options)))
    + " guest-sc\">\n        <span class=\"fa fa-soundcloud\"></span>\n      </div><!--\n --></a>";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });;
var getKeys = function(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
};

Handlebars.registerHelper('countKeys', function(obj) {
  return getKeys(obj).length;
});

Handlebars.registerHelper('print', function() {
  console.log(this);
});

var context = {
  ep1People: [
    {
      name: "GLENN O\'BRIEN",
      id: "glenn-o",
      socials: {
        ws: "http://glennobrien.com/",
        tw: "https://twitter.com/lordrochester"
      },
      bio: "Glenn is a creative director, copywriter, and writer. He writes largely on the subjects of art, music and fashion and is the author of over a dozen books including Madonna's <em>SEX</em>, <em>How To Be a Man</em>, <em>The Style Guy</em>, and <em>The Cool School</em>. An original member of Andy Warhol\'s Factory, Glenn has also worked as the creative director for Barneys New York and as the editor at large of High Times."
    },
    {
      name: "ANDRE SARAIVA",
      id: "andre-s",
      socials: {
        ws: "http://www.monsieura.com/",
        fb: "https://www.facebook.com/andre.saraiva.5245",
        tw: "https://twitter.com/BaronAndre"
      },
      bio: "André is a Swedish-Portuguese graffiti artist living in Paris, France. In the early 2000s, he developed The <em>Love Graffiti</em> series. André\'s artistic career includes solo exhibitions at Air de Paris, The Hole, Circle Culture, and Half Gallery."
    },
    {
      name: "OLIVIER ZAHM",
      id: "olivier-z",
      socials: {
        ws: "http://purple.fr/",
        ig: "http://instagram.com/ozpurple"
      },
      bio: "Olivier is the founder and owner of the French fashion and culture magazine <em>Purple Diary</em>. He is also an art curator and has selected exhibitions for PS1, Moma, and Centre Pompidou."
    },
    {
      name: "DEBBIE HARRY",
      id: "debbie-h",
      socials: {
        ws: "http://www.blondie.net/",
        tw: "https://twitter.com/BlondieOfficial"
      },
      bio: "Debbie is an American singer/song-writer and actress best known for being the lead singer of Blondie. She has also seen success as a solo artist, and in the mid-1990s she recorded and performed with The Jazz Passengers. Her acting career spans over 30 film roles and numerous television appearances."  
    },
    {
      name: "COLTER RULE",
      id: "colter-r",
      socials: {
        ws: "http://www.colterrule.com/"
      },
      bio: "Colter is a Manhattan born and bred actor that is the voice behind hundreds of radio and TV campaigns. He began acting in film and television, but found his passion in voicework. Since then he has done commercials for New York Lotto, Burger King, HBO, and American Express. So when you hear him asking <em>TV Party</em> guests their names, it\'s not déjà vu. You've probably just heard his voice a hundred times every day."
    },
    {
      name: "STELLA SCHNABEL",
      id: "stella-s",
      socials: {
      },
      bio: "The American poet and actor has been referred to as a \"downtown auteur\". Stella made her acting debut in <em>Basquiat</em>, a film made by her award-winning father, Julian Schnabel. Stella has since made a name for herself by playing roles in a handful of films."
    },
    {
      name: "LIZZI BOUGATSOS",
      id: "lizzi-b",
      socials: {
        fb: "https://www.facebook.com/ganggangdance",
      },
      bio: "Lizzi is an NYC artist and frontwoman of Gang Gang Dance. Outspoken, yet down to earth Lizzi has had her artwork displayed in galleries right here in New York all the way to Milan, including solo shows at James Fuentes LLC in New York and the Breeder in Athens, Greece."
    },
    {
      name: "SIMON O\'CONNOR",
      id: "simon-o",
      socials: {
        tw: "https://twitter.com/HanginBrainSimo",
        ig: "http://instagram.com/mrwendall"
      },
      bio: "Lead guitarist of Kuroma and Brooklyn based Amazing Baby."
    },
    {
      name: "BEN ROBEY",
      id: "ben-r",
      socials: {
        ws: "http://benrobey.tumblr.com/",
        tw: "https://twitter.com/Benrobey",
        ig: "http://instagram.com/benrobey"
      },
      bio: "Better known as Jah Jah, Ben makes up half of Brooklyn based rap duo Ninjasonik. When he\'s not rocking the mic, he can be found skating around NYC."
    },
    {
      name: "JAMES CHANCE",
      id: "james-c",
      socials: {
        ws: "http://jameschanceofficial.blogspot.com/",
        fb: "https://www.facebook.com/JamesChanceOfficial"
      },
      bio: "James is an American singer, songwriter, saxophonist and keyboard player. He was a prominent NYC musician in the late 70s. He is known for playing both improvisational jazz and punk music. He was in many bands, including Teenage Jesus and the Jerk alongside Lydia Lunch. James is a prominent figure in the No Wave movement."
    },
    {
      name: "LIGHT ASYLUM",
      id: "light-asylum",
      socials: {
        ws: "http://lightasylum.com/",
        fb: "https://www.facebook.com/LIGHTASYLUM",
        tw: "https://twitter.com/LightAsylum",
        sc: "https://soundcloud.com/light-asylum"
      },
      bio: "This darkwave music duo is made up of Shannon Funchess and Bruno Caviello. Before forming Light Asylum, Shannon collaborated with TV on the Radio and Telepathe and Bruno provided an electropop song for the <em>Party Monster</em> soundtrack. They released their first EP <em>In Tensions</em> in 2010 and put out their self-titled album in 2012."
    },
    {
      name: "THEOPHILUS LONDON",
      id: "theophilus-l",
      socials: {
        ws: "http://theophiluslondon.com/",
        fb: "https://www.facebook.com/theophilus.london",
        tw: "https://twitter.com/TheophilusL",
        sc: "https://soundcloud.com/theophilus-london"
      },
      bio: "The 27 year old rapper is originally from Trinidad but was raised in Brooklyn and later The Poconos. His first EP, <em>Lovers Holiday</em> was released in 2012 with some help from noteworthy artists such as Sara Quin of Tegan and Sara, Dave Sitek of TV on the Radio and Solange Knowles. He is influenced by many different genres of music, which no doubt is the cause for his unique sound that has gained him so much praise."
    },
    {
      name: "JOSEPH KOSUTH",
      id: "joseph-k",
      socials: {
      },
      bio: "Joseph is an American artist that was part of the conceptual movement in art that spanned across the world in the 60s. He is known for his literal art. Perhaps his most well known work is actually his first conceptual work called <em>Leaning Glass</em> in which he would display an object, a picture of the object and the dictionary definition of said object. He went on to study anthropology at New School and later began doing commissioned work in the early 90s."
    },
    {
      name: "CHRIS STEIN",
      id: "chris-s",
      socials: {
        fb: "https://www.facebook.com/pages/Chris-Stein/155180354492961",
        tw: "https://twitter.com/ESXP",
        ig: "http://instagram.com/christein",
        sc: "https://soundcloud.com/christein"
      },
      bio: "<em>TV Party</em> alum and co-founder of Blondie, Chris is no stranger to the NYC music and art scene. He started off as a photographer in 1968 and began to hang out around the downtown rock scene during his years at the School of Visual Arts. In 1973 he met Debbie Harry and the rest is history. He is credited as one of the pioneers of the new wave movement in music."
    },
    {
      name: "A-TRAK",
      id: "a-trak",
      socials: {
        ws: "http://djatrak.com/",
        fb: "https://www.facebook.com/atrak",
        tw: "https://twitter.com/atrak",
        sc: "https://soundcloud.com/a-trak"
      },
      bio: "A-trak is a Canadian turntablist, DJ, record producer, and music label executive. He is the owner of the record label Fool\'s Gold. A-Trak's video for \"Tuna Melt\" was nominated for Best Cinematography at the 2013 MTV Video Music Awards. A-Trak finished in 7th place in the 2013 America's Best DJ competition."
    },
    {
      name: "WARIS",
      id: "waris",
      socials: {
        ws: "http://houseofwaris.com/",
        fb: "https://www.facebook.com/pages/HOUSE-of-WARIS/162844217161603",
        tw: "https://twitter.com/House_of_Waris"
      },
      bio: "Waris is an Indian American designer and actor. His company, House of Waris, has collaborated with a number of other designers and artists throughout the years. Waris was placed on Vanity Fair\'s Best Dressed List, anointed British GQ\'s second best dressed man internationally and included in Vogue's 10 Most Impactful people list. He also pens the column \"Love &amp; Waris\" on Style.com."
    },
    {
      name: "THREEASFOUR",
      id: "threeasfour",
      socials: {
        ws: "http://threeasfour.com/",
        fb: "https://www.facebook.com/pages/threeASFOUR/78722474228",
        tw: "https://twitter.com/threeasfour",
        ig: "http://instagram.com/threeASFOUR"
      },
      bio: "Avant garde New York City based fashion label consists of three designers, Gabi Asfour, Angela Donhauser, and Adi Gil. The experimental designs produced by threeASFOUR have been purchased and displayed by several museums. threeasfour collaborated with Kate Spade in 2005 and Gap in 2007."
    },
    {
      name: "DUSTIN YELLIN",
      id: "dustin-y",
      socials: {
        ws: "http://dustinyellin.com/",
        fb: "https://www.facebook.com/dustin.yellin",
        ig: "http://instagram.com/dustinyellin"
      },
      bio: "Dustin is a contemporary artist based in Red Hook. He is best known for his sculptural paintings that use multiple layers of glass, each covered in detailed imagery, to create a single intricate, three-dimensional collage. He is the founder of Pioneer Works, a non-profit institute for art and innovation."
    },
    {
      name: "DAVID BLAINE",
      id: "david-b",
      socials: {
        ws: "http://davidblaine.com/",
        fb: "https://www.facebook.com/DavidBlaine",
        tw: "https://twitter.com/davidblaine",
        ig: "http://instagram.com/davidblaine"
      },
      bio: "David is an American magician, illusionist, and endurance artist. He is best known for his high-profile feats of endurance. He has performed all over the world and has set and broken several world records."
    },
    {
      name: "JOAN BUCK",
      id: "joan-b",
      socials: {
        tw: "https://twitter.com/JoanJulietBuck"
      },
      bio: "Joan is an American writer and actress. She was the Editor-in-Chief of French Vogue from 1994 to 2001. She was contributing editor to Vogue and Vanity Fair for many years and currently writes for T, New York Times\' fashion magazine, W Magazine, Newsweek, and The Daily Beast,among others."
    },
    {
      name: "TOM SACHS",
      id: "tom-s",
      socials: {
        ws: "http://www.tomsachs.org/",
        fb: "https://www.facebook.com/teamsachs",
        tw: "https://twitter.com/tom_sachs",
        ig: "http://instagram.com/tomsachs"
      },
      bio: "Tom is a contemporary artist based in New York City. His works include Space Program, launched at Gagosian Gallery in Los Angeles in 2007, and Bronze Collection, shown at Lever House, Baldwin Gallery (Aspen, CO), and the Trocadero in Paris in 2009."
    },
    {
      name: "OSGEMEOS",
      id: "osgemeos",
      socials: {
        ws: "http://www.osgemeos.com.br/pt",
        fb: "https://www.facebook.com/pages/Os-Gemeos/207835592677428",
        tw: "https://twitter.com/OsGemeos",
        ig: "http://instagram.com/osgemeos"
      },
      bio: "Os Gemeos are graffiti artists and identical twin brothers. Their latest work is a wall in Miami, Florida painted for Art Basel Miami Beach. Before that was a 16x10 meter painting in the centre of Heerlen. This painting determines part of cultural festival Cultura Nova."
    },
    {
      name: "DEVENDRA BANHART",
      id: "devendra-b",
      socials: {
        ws: "http://www.devendrabanhart.com/",
        fb: "https://www.facebook.com/DevendraBanhartMusic",
        tw: "https://twitter.com/DevendraBanhart",
        ig: "http://instagram.com/devendrabanhartofficial"
      },
      bio: "Devendra is a Venezuelan American singer-songwriter and visual artist.Banhart released his debut album in 2002, continuing to record his material on the Young God and XL labels, as well as other work on compilations and collaborations. He has produced 8 albums since 2002."
    },
    {
      name: "ANDREW VANWYNGAREN",
      id: "andrew-v",
      socials: {
        ws: "http://whoismgmt.com/"
      },
      bio: "Andrew is the frontman of American psychedelic rock duo known as MGMT. He attended Wesleyan University originally to study astronomy, but changed his whole career path upon meeting Ben Goldwasser, better known as the other half of MGMT. They signed with Columbia Records and Red Ink in 2006. MGMT was nominated for the 2010 Grammy award for Best New Artist, and their track \"Kids\" was nominated for Best Pop Performance By a Duo or Group with Vocals."
    },
    {
      name: "CAMILLE ROWE",
      id: "camille-r",
      socials: {
        fb: "https://www.facebook.com/camilleroweofficial",
        tw: "https://twitter.com/CamilleRowe",
        ig: "http://instagram.com/fingermonkey"
      },
      bio: "Camille was originally born in Paris, France. She modeled for Amor Amor by Cacharel, Eau de Chloe, Adidas, Cerutti, Happy Socks, and Mavi Jeans. Most recently she modeled for Rag &amp; Bone and is featured alongside Robert Pattinson for Dior Homme."
    },
    {
      name: "MICHAEL HAINEY",
      id: "michael-h",
      socials: {
        ws: "http://aftervisitingfriends.com/",
        fb: "https://www.facebook.com/AfterVisitingFriends",
        tw: "https://twitter.com/michaelhainey",
        ig: "http://instagram.com/michael_hainey"
      },
      bio: "Michael Hainey is the Deputy Editor of GQ and has been with the magazine for fourteen years. He is also the author of <em>After Visiting Friends.</em>"
    },
    {
      name: "HOOMAN MAJD",
      id: "hooman-m",
      socials: {
        ws: "http://www.hoomanmajd.com/",
        tw: "https://twitter.com/hmajd",
        ig: "http://instagram.com/hoomanmajd"
      },
      bio: "Hooman is a NYC-based Iranian-American journalist, author, and commentator who writes on Iranian affairs. His three books include <em>The Ayatollah Begs to Differ: The Paradox of Modern Iran</em>, the <em>Ayatollah\'s Democracy: an Iranian Challenge</em>, and <em>The Ministry of Guidance Invites You to Not Stay: An American Family in Iran</em>."
    },
    {
      name: "DAVE 1",
      id: "dave1",
      socials: {
        ws: "http://chromeo.net/",
        fb: "https://www.facebook.com/chromeo",
        tw: "https://twitter.com/Chromeo",
        sc: "https://soundcloud.com/chromeo"
      },
      bio: "Dave 1 is part of Canadian electro-funk band Chromeo formed in 2002 with childhood friend Patrick Gemayel. David earned his Ph.D in French Literature from Columbia University and is currently appointed as lecturer in French at Barnard College."
    },
    {
      name: "VINOODH MATADIN / INEZ VAN LAMSWEERDE",
      id: "vinoodh-inez",
      socials: {
        ws: "http://inezandvinoodh.com/",
        tw: "https://twitter.com/inezandvinoodh",
        ig: "http://instagram.com/inezvinoodh"
      },
      bio: "This dutch duo has been dominating the fashion industry since the early 90s with their distinguishable photography and videography. Their work consists of stunning portraits of celebrities such as M.I.A, Scarlett Johansson and Kim Gordon and some of the most well known editorial work for brands including Gucci and Chloé."
    },
    {
      name: "GIBBY HAYNES",
      id: "gibby-h",
      socials: {
        fb: "https://www.facebook.com/pages/Gibby-Haynes/314389524652",
      },
      bio: "Gibby has fronted multiple bands, including P alongside Johnny Depp, but most prominently he is known as the frontman for psychedelic punk rock band Butthole Surfers. He is also a painter and has had his art displayed at the Kidd Yellin gallery co-founded by fellow <em>TV Party</em> attendee Dustin Yellin."
    },
    {
      name: "AARON YOUNG",
      id: "aaron-y",
      socials: {
        ig: "http://instagram.com/artistaaronyoung"
      },
      bio: "Aaron is an NYC based artist originally from San Francisco. He quickly gained recognition when MoMA purchased a film he made while studying at the San Francisco Art Institute. The video as well as most of his other work is heavily influenced by his love of motorcycles and the dangerous performance art done by Chris Burden in the 60s. Aaron later graduated with an MFA from Yale."
    },
    {
      name: "MATT MCAULEY",
      id: "matt-mc",
      socials: {
        ws: "http://areweapons.com/",
        fb: "https://www.facebook.com/areweapons",
        sc: "https://soundcloud.com/areweapons/"
      },
      bio: "Matt made his way into the NYC music scene when he formed the noise rock band A.R.E Weapons with Brain F. McPeck, and Ryan Noel. Paul Sevigny managed the band and later joined them after their original synth player quit. Matt and Brian went on to form TV Baby. Matt says their 2010 self titled album \"is based around the TV Baby character, a man-child raised by TV, living in the city.\""
    },
    {
      name: "LUDWIG PERSIK",
      id: "ludwig-p",
      socials: {
        ws: "http://ludwigpersik.tumblr.com/",
        fb: "https://www.facebook.com/LudwigPersik",
        tw: "https://twitter.com/ludwigpersik",
        sc: "https://soundcloud.com/lpersik"
      },
      bio: "Born and bred in the LES, Ludwig has always been very influenced by the CBGB scene. Even though he makes an interesting mix of dance and psychedelic folk music, you can hear how growing up so close to the punk scene has affected him."
    },
    {
      name: "FAB 5 FREDDY",
      id: "fab-5",
      socials: {
        ws: "http://fab5freddy.com/",
        tw: "https://twitter.com/fabnewyork",
        ig: "http://instagram.com/fabnewyork"
      },
      bio: "Freddy has been around from the very beginning of <em>TV Party</em>. In addition to being a regular guest he also operated the camera. Freddy started off as a graffiti artist in the The Fabulous 5, a group famous for tagging entire sides of subway cars. He went on to host \"Yo! MTV Raps\", the first internationally telecast hip-hop music show."
    },
    {
      name: "MARIPOL",
      id: "maripol",
      socials: {
        ws: "http://www.maripolitan.com/"
      },
      bio: "The French artist and designer who styled Grace Jones and Debbie Harry and is best known for creating Madonna's iconic looks in the mid-80s. Not long after moving to New York, she opened her own boutique called Maripolitan. During that time she also created various documentary films, most notably is <em>Crack Is Whack</em>, a film about Keith Haring. She has also worked on <em>Downtown 81</em> and various music videos. She is well known for her obsession with polaroid photography and is even snapping away with her polaroid camera in the episode."
    },
    {
      name: "GABE ANDRUZZI",
      id: "gabe-a",
      socials: {
        fb: "https://www.facebook.com/pages/The-Rapture/133896639724",
        tw: "https://twitter.com/ITSTHERAPTURE"
      },
      bio: "Andruzzi is a multi-instrumentalist for the band The Rapture. He is also known for his remixes, notably of Baby Alpaca\'s \"Run With You\". Gabe can also be found DJing NYC parties with fellow bandmate Vito Roccoforte."
    },
    {
      name: "DAKOTA GOLDHOR",
      id: "dakota-g",
      socials: {
        ws: "http://www.imdb.com/name/nm1350469/"
      },
      bio: "Dakota is an American actress that has been featured in many independent films over the years. She has also modeled for fellow attendee Olivier Zahm\'s <em>Purple Magazine</em>."
    },
    {
      name: "TIGGA CALORE",
      id: "tigga-c",
      socials: {
        tw: "https://twitter.com/TIGGACALORE",
        sc: "https://soundcloud.com/calor3"
      },
      bio: "The Staten Island bred musician and dancer has been gaining recognition for her catchy darkwave dance tracks and killer 80s club-kid inspired style."
    },
    {
      name: "LUCIEN SMITH",
      id: "lucien-s",
      socials: {
        ws: "http://www.luciensmithstudio.com/",
        ig: "http://instagram.com/lucifer_lemon"
      },
      bio: "Lucien is a young painter and sculptor based in Tribeca. He is originally from LA, but moved out to NYC to pursue an education in the arts at Cooper Union. His art has been exhibited in galleries in New York, Los Angeles, Florida, Milan, and London. In 2012 he was featured in Forbes\' 30 Under 30."
    },
    {
      name: "BILL POWERS",
      id: "bill-p",
      socials: {
        ws: "http://halfgallery.com/",
      },
      bio: "Bill is a Manhattan born gallery owner, art dealer, author and judge on Bravo\'s \"Work of Art\". Bill and his wife Cynthia Rowley are perhaps Manhattan's busiest couple. They are the founders of Exhibition A, an online source for buying signed contemporary art at an affordable price. Bill is also the owner of Half Gallery and has showcased art by Terry Richardson and <em>TV Party</em>\'s own André Saraiva."
    },
    {
      name: "UNSTOPPABLE DEATH MACHINES",
      id: "unstoppable-dm",
      socials: {
        ws: "http://unstoppabledeathmachines.com/",
        fb: "https://www.facebook.com/UNSTOPPABLEDEATHMACHINES",
        tw: "https://twitter.com/DeathMachinesNY"
      },
      bio: "If you\'re listening to this band for the first time, you\'re probably envisioning a guild of giant, vicious men tearing away at their instruments. In reality Unstoppable Death Machines consists of only two vicious, long haired brothers. Mike &amp; Billy Tucci are responsible for creating music that has is an equal ratio aggressive chaos and lighthearted fun. The brothers are also very involved in the art world. They have been featured in Hero Magazine and played in galleries and museums such as The Stone NYC and the Queens Museum of Art. "
    },
    {
      name: "NATE LOWMAN",
      id: "nate-l",
      socials: {
        ws: "http://www.salon94.com/artists/detail/nate-lowman"
      },
      bio: "Nate is a Tribeca based artist that is known for his representation of the decay in American culture. Born in Las Vegas and educated at NYU, Nate has had his work displayed in many galleries and major museum shows, such as the Whitney Biennial and Greater New York at MoMA PS1. He is associated with Warhol\'s Children, a group of artists credited with keeping the spirit of the downtown art scene alive."
    },
    {
      name: "GAZELLE",
      id: "gazelle",
      socials: {
        ws: "http://www.yogazelle.com/",
        fb: "https://www.facebook.com/yogazelle",
        tw: "https://twitter.com/yogazelle"
      },
      bio: "Though coming from a very small town in Southeast Africa, frontman Xander Ferreira blends synth-pop, funk, mesmerizing stage performance and impeccable style. He saw no issues getting his infectious and politically fueled music noticed by the likes of Italian Rolling Stone, WAD and QUOTATION magazines. The other half of Gazelle is \"a musical mad scientist\" known as DJ Invisible. Together the two have found a way to introduce the beautiful culture of South Africa to the world of dance music."
    },
    {
      name: "ROBERT AARON",
      id: "robert-a",
      socials: {
        tw: "https://twitter.com/runawayhorses"
      },
      bio: "Robert has worked with so many musicians it's hard to keep track. He has been featured on tracks by Blondie, Amy Winehouse, the Wu-Tang Clan and David Bowie. He's been working with James Chance (also in attendance at <em>TV Party</em>) since 1981 in James White and the Blacks."
    },
    {
      name: "NED SUBLETTE",
      id: "ned-s",
      socials: {
      },
      bio: "Ned Sublette is an American musician known for his unique style of music that blends traditional country with Caribbean rumba, salsa and cumbia. He studied Spanish classical guitar at the University of New Mexico with Hector Garcia and Emilio Pujol in Spain. He moved to New York City in 1976 and began to work with fellow composers such as Peter Gordon and John Cage. Ned has also written multiple books, including <em>The Year Before the Flood: A Story of New Orleans</em>."
    }
  ],
  ep2People: [
    {
      name: "HAILEY BENTON GATES",
      id: "hailey-g",
      socials: {
        ig: "http://instagram.com/haileybentongates"
      },
      bio: "Hailey is a director, actress, writer, and model from New York City, as well as the host for our second episode of <em>TV Party</em> at Lafayette House."
    },
    {
      name: "DAVID SPADE",
      id: "david-s",
      socials: {
        ws: "http://www.davidspade.com/",
        fb: "https://www.facebook.com/DavidSpade",
        tw: "https://twitter.com/",
        ig: "http://instagram.com/davidspade"
      },
      bio: "David is an American actor, comedian, writer, and TV personality. He starred in Tommy Boy, Just Shoot Me, and Eight Simple Rules, and is featured in the CBS sitcom Rules of Engagement. He is also working with TBS on an animated series based on his film, Joe Dirt."
    },
    {
      name: "JR",
      id: "jr",
      socials: {
        ws: "http://www.jr-art.net/",
        fb: "https://www.facebook.com/JRartiste",
        tw: "https://twitter.com/jrart",
        ig: "http://instagram.com/jr"
      },
      bio: "JR is the name of a photographer and artist whose identity is unconfirmed. JR calls himself a “photograffeur”, as he is best known for fly-posting large black and white images in public locations. JR's work has been described by <em>Le Monde</em> as \"revealing humanity\" and in October 2011 JR won the TED prize for exceptional individual."
    },
    {
      name: "QUENTIN JONES",
      id: "quentin-j",
      socials: {
        ws: "http://www.quentinjones.info/work/",
        tw: "https://twitter.com/quentin_jones",
        ig: "http://instagram.com/quentin_jones"
      },
      bio: "Quentin is a mixed-media artist who has created short, surrealist videos using layers of photography, illustration and animation for fashion brands like Chanel, Louis Vuitton, Target, Kenzo and Victoria Beckham."
    },
    {
      name: "CINTRA WILSON",
      id: "cintra-w",
      socials: {
        tw: "https://twitter.com/xintra"
      },
      bio: "Cintra is an American writer, performer, and cultural critic. She is a contributor to the <em>New York Times</em>\' \"Critical Shopper\" series and the Hartford Advocate for her political column, \"The C Word\". She is quoted as being one of the 50 \"most influential people working in New York fashion\". Her books include <em>A Massive Swelling: Celebrity Re-examined as a Grotesque Crippling Disease</em>, <em>Colors Insulting to Nature</em>, and <em>Caligula for President: Better American Living Through Tyranny</em>."
    },
    {
      name: "JOSH SAFDIE",
      id: "josh-s",
      socials: {
        tw: "https://twitter.com/josh_benny",
        ig: "http://instagram.com/booger_nose"
      },
      bio: "Josh is an independent filmmaker based in New York City. His earlier works include a short film for Kate Spade Handbags and a second feature film called <em>Go Get Some Rosemary</em>. His documentary <em>Lenny Cooke</em> premiered at the Tribeca Film Festival and at the Venice Film Festival. Josh is currently working on <em>Heaven Knows What</em> and <em>Uncut Gems</em>."
    },
    {
      name: "KEVIN FARLEY",
      id: "kevin-f",
      socials: {
        tw: "https://twitter.com/imkevinfarley",
        ig: "http://instagram.com/kevfarls"
      },
      bio: "Kevin is an American actor, production designer, singer, dancer, occasional composer and stand-up comic. Kevin is best known for playing \"Doug Linus\" in the fictional boy band 2ge+her. He also appears in <em>The Waterboy</em> and <em>Dirty Work</em>. Kevin is featured as a guest on <em>The View</em>, <em>Tom Green's House Tonight</em>, and <em>The Jason Ellis Show</em>."
    },
    {
      name: "HOGAN GORMAN",
      id: "hogan-g",
      socials: {
        ws: "http://www.hotcripple.com/",
        tw: "https://twitter.com/hogangorman"
      },
      bio: "Hogan is an ex-model turned actress, but what she is best known for is her show <em>Hot Cripple</em> which was first performed as part of the annual New York International Fringe Festival where Hogan received the FringeNYC Overall Excellence Award for Outstanding Actor. "
    },
    {
      name: "JAPANTHER",
      id: "japanther",
      socials: {
        ws: "http://www.japanther.com/",
        fb: "https://www.facebook.com/pages/JAPANTHER/22378113409",
        tw: "https://twitter.com/japanther",
        ig: "http://instagram.com/japanther"
      },
      bio: "Japanther is a band established by Matt Reilly and Ian Vanek. Japanther is featured in the 2006 Whitney Biennial and the 2011 Venice Biennale, and has collaborated with a diverse pool of artists such as Gelitin, Penny Rimbaud, Gee Vaucher, Dan Graham, and Spank Rock. Japanther appears alongside synchronized swimmers, with giant puppets, in the back of a moving truck in SoHo, and at shows with giant dinosaurs and BMXers flying off the walls."
    },
    {
      name: "SHAYNE OLIVER",
      id: "shayne-o",
      socials: {
        ws: "https://www.hoodbyair.com/",
        tw: "https://twitter.com/shayneHBA",
        ig: "http://instagram.com/shaynehba"
      },
      bio: "Shayne is best known for his fashion line Hood By Air which was influential in him being named one of the ten people about to change the style game by Complex with celebrities such as A$ap Rocky endorsing his t-shirts. In addition to running Hood By Air, Shayne also DJs as half of Ghe20 G0th1k."
    },
    {
      name: "HALEY WOLLENS",
      id: "haley-w",
      socials: {
        ws: "http://www.hwcreative.net/",
        tw: "https://twitter.com/hdubblicious",
        ig: "http://instagram.com/hdubblicious"
      },
      bio: "Haley is a celebrity stylist having worked for clients such as M.I.A, Nike+Fuelband, Hood By Air, and Inc. Haley also directed and styled \"Champagne Coast\" for Blood Orange with clothing from designers Eckhaus Latta."
    },
    {
      name: "PRINCESS NOKIA",
      id: "princess-n",
      socials: {
        fb: "https://www.facebook.com/pages/Princess-Nokia/262313607311498",
        tw: "https://twitter.com/princess_nokia",
        ig: "http://instagram.com/princessnokia",
        sc: "https://soundcloud.com/wavy-spice"
      },
      bio: ""
    },
    {
      name: "ERIC GOODE",
      id: "eric-g",
      socials: {
        ws: "http://www.turtleconservancy.org/",
        fb: "https://www.facebook.com/TurtleConservancy",
        tw: "https://twitter.com/turtletweets/"
      },
      bio: ""
    },
    {
      name: "KAY GOLDBERG",
      id: "kay-g",
      socials: {
        fb: "https://www.facebook.com/kay.k.goldberg",
        ig: "http://instagram.com/kaykasparhauser"
      },
      bio: ""
    },
    {
      name: "WALTER \"DOC\" STEDING",
      id: "walter-s",
      socials: {
        ws: "http://www.waltersteding.com/main.php",
        fb: "https://www.facebook.com/profile.php?id=100003589976680"
      },
      bio: ""
    },
    {
      name: "BRIGID BERLIN",
      id: "brigid-b",
      socials: {
      },
      bio: ""
    },
    {
      name: "JAMES KRASNER",
      id: "james-k",
      socials: {
        ws: "http://www.krasn3r.com/",
        fb: "https://www.facebook.com/jamie.krasner",
        tw: "https://twitter.com/JamesKarsner",
        sc: "https://soundcloud.com/jamesk_1"
      },
      bio: ""
    },
    {
      name: "DIRTY FINGER",
      id: "dirtyfinger",
      socials: {
        ws: "http://dirtyfinger.tumblr.com/",
        fb: "https://www.facebook.com/DjDirtyfinger",
        tw: "https://twitter.com/dirtyfinger",
        sc: "https://soundcloud.com/dirtyfinger"
      },
      bio: ""
    },
    {
      name: "NATALIE WHITE",
      id: "natalie-w",
      socials: {
      },
      bio: ""
    },
    {
      name: "TVBABY",
      id: "tvbaby",
      socials: {
        ws: "http://tvbabyusa.com/",
        fb: "https://www.facebook.com/tvbabyusa",
        tw: "http://tvbabyusa.com/"
      },
      bio: ""
    },
    {
      name: "UFO",
      id: "ufo",
      socials: {
      },
      bio: ""
    },
    {
      name: "VINCENT KARTHEISER",
      id: "vincent-k",
      socials: {
        
      },
      bio: ""
    },
    {
      name: "DAN FRIEL",
      id: "dan-f",
      socials: {
        ws: "http://danfriel.com/",
        fb: "https://www.facebook.com/danfrielmusic",
        tw: "https://twitter.com/dfrieldfriel",
        sc: "https://soundcloud.com/thrilljockey/dan-friel-valedictorian"
      },
      bio: ""
    },
    {
      name: "PETER MCGOUGH",
      id: "peter-m",
      socials: {
        ws: "http://www.mcdermottandmcgough.com/",
        fb: "https://www.facebook.com/pages/McDermott-McGough/175318425826122"
      },
      bio: ""
    },
    {
      name: "OSCAR O'BRIEN",
      id: "oscar-o",
      socials: {
      },
      bio: ""
    },
    {
      name: "MICHAEL PORTNOY",
      id: "michael-p",
      socials: {
        ws: "http://www.strangergames.com/Michael_Portnoy.html",
      },
      bio: ""
    },
    {
      name: "IEVA MISEVICIUTE",
      id: "ieva-m",
      socials: {
        ws: "http://www.ieva.co/",
        ig: "http://instagram.com/ieva_miseviciute"
      },
      bio: ""
    },
  ],
  ep3People: [
    {
      name: "SWOON",
      id: "swoon",
      socials: {
        ws: "http://shop.swooninprint.com/",
        fb: "https://www.facebook.com/SwoonStudio",
        tw: "https://twitter.com/swoon",
        ig: "http://instagram.com/swoonhq"
      },
      bio: ""
    },
    {
      name: "GANGSTAGRASS",
      id: "gangstagrass",
      socials: {
        ws: "http://gangstagrass.com/",
        fb: "https://www.facebook.com/gangstagrass",
        tw: "https://twitter.com/gangstagrass",
        sc: "https://soundcloud.com/gangstagrass"
      },
      bio: ""
    },
    {
      name: "VAN NEISTAT",
      id: "van-n",
      socials: {
        ws: "https://vimeo.com/vanneistat"
      },
      bio: ""
    },
    {
      name: "HUGUE DUFOUR",
      id: "hugue-d",
      socials: {
      },
      bio: ""
    },
    {
      name: "ANDY SHERNOFF",
      id: "andy-s",
      socials: {
        ws: "http://andyshernoff.com/",
        fb: "https://www.facebook.com/pages/Andy-Shernoff-Appreciation-Society/111480742209768",
        tw: "https://twitter.com/andyshernoff",
      },
      bio: ""
    },
    {
      name: "GARY INDIANA",
      id: "gary-i",
      socials: {
        ws: "http://whitney.org/Exhibitions/2014Biennial/GaryIndiana"
      },
      bio: ""
    },
    {
      name: "LEO FITZPATRICK",
      id: "leo-f",
      socials: {
        ws: "http://www.imdb.com/name/nm0280559/"
      },
      bio: ""
    },
    {
      name: "JARINA DE MARCO",
      id: "jarina-dm",
      socials: {
        ws: "http://jarinademarco.com/",
        fb: "https://www.facebook.com/JarinaDeMarco",
        tw: "https://twitter.com/jarinademarco",
        ig: "http://instagram.com/jarinademarco"
      },
      bio: ""
    },
    {
      name: "HEATHER BOO",
      id: "heather-b",
      socials: {
        ws: "http://stylelikeu.com/more/heather-boo/",
        sc: "https://soundcloud.com/beauband"
      },
      bio: ""
    },
    {
      name: "WHAT CHEER?",
      id: "whatcheer",
      socials: {
        ws: "http://www.whatcheerbrigade.com/",
        fb: "https://www.facebook.com/whatcheerbrigade",
        tw: "https://twitter.com/whatcheerb",
      },
      bio: ""
    },
    {
      name: "CHRISTOPHER PAUL STELLING",
      id: "christopher-ps",
      socials: {
        ws: "http://christopherpaulstelling.wordpress.com/",
        fb: "https://www.facebook.com/pages/Christopher-Paul-Stelling/238129001427",
        tw: "https://twitter.com/c_p_stelling",
        sc: "https://soundcloud.com/christopher-paul-stelling"
      },
      bio: ""
    },
    {
      name: "CLAIRE BISHOP",
      id: "claire-b",
      socials: {
        ws: "http://clairebishopresearch.blogspot.com/",
      },
      bio: ""
    },
    {
      name: "BANKSY",
      id: "banksy",
      socials: {
        ws: "http://banksy.co.uk/"
      },
      bio: ""
    },
    {
      name: "ANNABELLE DEXTER-JONES",
      id: "annabelle-dj",
      socials: {
        fb: "https://www.facebook.com/pages/Annabelle-Dexter-Jones/416555981696570",
        tw: "https://twitter.com/abanel",
        ig: "http://instagram.com/abanel"
      },
      bio: ""
    },
    {
      name: "BUSHWICK PRINT LAB",
      id: "bushwick-pl",
      socials: {
        ws: "http://www.bushwickprintlab.org/",
        fb: "https://www.facebook.com/BushwickPrintLab",
        ig: "http://instagram.com/bushwickprintlab"
      },
      bio: ""
    },
    {
      name: "ANNE APPARU",
      id: "anne-a",
      socials: {
        ws: "http://www.therearenorecipes.com/",
      },
      bio: ""
    },
    {
      name: "DIAKO DIAKOFF",
      id: "diako-d",
      socials: {
        ws: "http://diakodiakoff.com/",
      },
      bio: ""
    },
    {
      name: "ALISON CASTLE",
      id: "alison-c",
      socials: {
        fb: "https://www.facebook.com/alisonccastle"
      },
      bio: ""
    },
    {
      name: "NICK CHATFIELD-TAYLOR",
      id: "nick-ct",
      socials: {
        ws: "http://nickchatfield-taylor.tumblr.com/"
      },
      bio: ""
    },
  ]
};


// Used for counting how many social links a guest has
var getKeys = function(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
};

Handlebars.registerHelper('countKeys', function(obj) {
  return getKeys(obj).length;
});

// Just for fun
Handlebars.registerHelper('print', function() {
  console.log(this);
});

// When a guest is clicked on, retrieve its guest object
function getGuestFromId(id) {
  return $.grep(context.guests, function(n,i) {
    return (n.id==id);
  })[0];
}

// Load guest template and populate page
var peopleTemp = TVP.templates.test_guest;

var ep3People = peopleTemp(context.ep3People);
$('.ep3-people-container').append(ep3People);
var ep2People = peopleTemp(context.ep2People);
$('.ep2-people-container').append(ep2People);
var ep1People = peopleTemp(context.ep1People);
$('.ep1-people-container').append(ep1People);

// Load modal template
var modalTemp = TVP.templates.modal;


// Feed that object to modal template and display modal
$(document).on('click', '.guest-name, .guest-overlay', function() {
  var $id = $(this).parent().attr('id');
  var guest = getGuestFromId($id);
  var modal = modalTemp(guest);
  $('#modal-container').html(modal);
  var $modal = $('#guest-modal');
  $modal.modal();
});

// Set up masonry for People page
var colWidth = 225;
var $guests = $('.people-container');
$guests.masonry({
  columnWidth: colWidth,
  itemSelector: '.guest',
  isFitWidth: true,
});

// Bug: when People selected, all in one column; this kicks masonry layout
$('a[data-toggle=tab]').on('shown.bs.tab', function (e) {
  $guests.masonry('layout');
});

// (function($) {

// 	$(window).on('resize', function() {
// 		var $width = $guests.width();
// 		var $thumbs = $('.guest', $guests);
// 		var columns = Math.ceil($width / colWidth);
// 		var guest = Math.floor($width / columns);
// 		$thumbs.width(guest);
// 		$guests.masonry({
// 		  columnWidth: colWidth,
// 		  itemSelector: '.guest',
// 		  isFitWidth: true,
// 		});
// 	});
// })