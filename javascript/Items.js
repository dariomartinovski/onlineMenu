const coffees = [
    {imgSrc: "../images/Coffee250/Espresso.png", mkTitle: "еспресо", enTitle: "espresso", price: 60},
    {imgSrc: "../images/Coffee250/Prodolzheno.png", mkTitle: "продолжено еспресо", enTitle: "long espresso", price: 60},
    {imgSrc: "../images/Coffee250/Makijato.png", mkTitle:"макијато", enTitle: "macchiato", price: 70},
    {imgSrc: "../images/Coffee250/MaloMakijato.png", mkTitle:"мало макијато", enTitle: "short macchiato", price: 60},
    {imgSrc: "../images/Coffee250/Freddo.png", mkTitle:"фредо еспресо", enTitle: "fredo espresso", price: 70},
    {imgSrc: "../images/Coffee250/Latte.png", mkTitle:"лате макијато", enTitle: "latte macchiato", price: 80},
    {imgSrc: "../images/Coffee250/LatteVkus.png", mkTitle:"лате макијато со вкус", enTitle: "latte macchiato flavor", price: 90},
    {imgSrc: "../images/Coffee250/Kapuchino.png", mkTitle:"капучино", enTitle: "capuccino", price: 80},
    {imgSrc: "../images/Coffee250/Mafijashko.png", mkTitle:"мафијашко", enTitle: "mafijasko", price: 70},
    {imgSrc: "../images/Coffee250/LadnoMakijato.png", mkTitle:"ладно макијато", enTitle: "cold macchiato", price: 70},
    {imgSrc: "../images/Coffee250/Nescafe.png", mkTitle:"нескафе", enTitle: "nescafe", price: 80},
    {imgSrc: "../images/Coffee250/NescafePopareno.png", mkTitle:"попаренo нескафе", enTitle: "steamed nescafe", price: 60},
    {imgSrc: "../images/noimage.png", mkTitle:"топло чоколадо", enTitle: "hot chocolate", price: 100},
    {imgSrc: "../images/noimage.png", mkTitle:"топло чоколадо плазма", enTitle: "hot chocolate plazma", price: 110},
    {imgSrc: "../images/noimage.png", mkTitle:"топло чоколадо со орео", enTitle: "hot chocolate with oreo", price: 100},
    {imgSrc: "../images/Coffee250/Kakao.png", mkTitle:"какао", enTitle: "cocoa", price: 70},
    {imgSrc: "../images/Coffee250/KakaoMleko.png", mkTitle:"какао со млеко", enTitle: "cocoa with milk", price: 80},
    {imgSrc: "../images/Coffee250/EspressoDecaf.png", mkTitle:"безкофеинско еспресо", enTitle: "decaffeinated espresso",    price: 70}
]
const nonAlhoholic = [
    {imgSrc: "../images/Sodas/CocaCola.png", mkTitle:"кока кола", enTitle: "coca cola", price: 60},
    {imgSrc: "../images/Sodas/CocaColaZero.png", mkTitle:"кока кола зеро", enTitle: "coca cola zero", price: 60},
    {imgSrc: "../images/Sodas/Schweppes.png", mkTitle:"швепс", enTitle: "schweppes", price: 60},
    {imgSrc: "../images/Sodas/SchweppesTangerina.png", mkTitle:"швепс танџерина", enTitle: "schweppes tangerine", price: 60},
    {imgSrc: "../images/Sodas/SchweppesTonic.png", mkTitle:"швепс тоник", enTitle: "schweppes tonic", price: 60},
    {imgSrc: "../images/Sodas/Fanta.png", mkTitle:"фанта", enTitle: "fanta", price: 60},
    {imgSrc: "../images/Sodas/FantaTropical.png", mkTitle:"фанта тропикал", enTitle: "fanta tropical", price: 60},
    {imgSrc: "../images/Sodas/FantaShokata.png", mkTitle:"фанта шоката", enTitle: "fanta shokata", price: 60},
    {imgSrc: "../images/Sodas/Sprite.png", mkTitle:"спрајт", enTitle: "sprite", price: 60},
    {imgSrc: "../images/Sodas/Pepsi.png", mkTitle:"пепси", enTitle: "pepsi", price: 50},
    {imgSrc: "../images/Sodas/PepsiZero.png", mkTitle:"пепси зеро", enTitle: "pepsi zero", price: 50},
    {imgSrc: "../images/Sodas/Gazoza.png", mkTitle:"газоза", enTitle: "gazoza", price: 50},
    {imgSrc: "../images/Sodas/7up.png", mkTitle:"севен ап", enTitle: "seven up", price: 50},
    {imgSrc: "../images/Sodas/Mirinda.png", mkTitle:"миринда", enTitle: "mirinda", price: 50},
    {imgSrc: "../images/Sodas/Cockta.png", mkTitle:"кокта", enTitle: "cocta", price: 60},
    {imgSrc: "../images/Sodas/PellegrinoKalinka.png", mkTitle:"сан пелегрино калинка+портокал", enTitle: "san pellegrino melograno & arancia", price: 90},
    {imgSrc: "../images/Sodas/PellegrinoMenta.png", mkTitle:"сан пелегрино лимон+мента", enTitle: "san pellegrino limone & menta", price: 90},
    {imgSrc: "../images/Sodas/PellegrinoLimon.png", mkTitle:"сан пелегрино лимоната", enTitle: "san pellegrino limonata", price: 90},
    {imgSrc: "../images/Sodas/RedBull.png", mkTitle:"ред бул", enTitle: "red bull", price: 150},
    {imgSrc: "../images/noimage.png", mkTitle:"чај", enTitle: "tea", price: 60},
    {imgSrc: "../images/Sodas/Nektarchinja.png", mkTitle:"нектар", enTitle: "nectar", price: 80},
    {imgSrc: "../images/Sodas/Mango.png", mkTitle:"нектар манго", enTitle: "nectar mango", price: 80},
    {imgSrc: "../images/Sodas/Cedevita.png", mkTitle:"цедевита", enTitle: "cedevita", price: 50},
    {imgSrc: "../images/Sodas/OrangeJuice.png", mkTitle:"цеден портокал", enTitle: "squeezed orange", price: 100},
    {imgSrc: "../images/Sodas/LemonJuice.png", mkTitle:"цеден лимон", enTitle: "squeezed lemon", price: 80},
    {imgSrc: "../images/Sodas/MixOrangeLemon.png", mkTitle:"цеден микс пл", enTitle: "squeezed mix", price: 120},
]
const waters = [
    {imgSrc: "../images/Waters/PelisterkaNegazirana.png", mkTitle:"пелистерка", enTitle: "pelisterka", price: 50},
    {imgSrc: "../images/Waters/PelisterkaGazirana.png", mkTitle:"пелистерка газирана", enTitle: "pelisterka sparkling", price: 50},
    {imgSrc: "../images/Waters/Rosa.png", mkTitle:"роса", enTitle: "rosa", price: 50},
    {imgSrc: "../images/Waters/KnjazWater.png", mkTitle:"књаз милош", enTitle: "knjaz milos", price: 50}
]
const beers = [
    {imgSrc: "../images/Beer/skopskoOriginal.png", mkTitle: "скопско", enTitle: "skopsko", price: 90},
    {imgSrc: "../images/Beer/skopskoSmooth.png", mkTitle: "скопско смут", enTitle: "skopsko smooth", price: 90},
    {imgSrc: "../images/Beer/heineken.png", mkTitle: "хајнекен", enTitle: "heineken", price: 130},
    {imgSrc: "../images/Beer/amstel.png", mkTitle: "амстел", enTitle: "amstel", price: 100},
    {imgSrc: "../images/Beer/zlatenDab.png", mkTitle: "златен даб", enTitle: "zlaten dab", price: 90},
    {imgSrc: "../images/Beer/becks.png", mkTitle: "бекс", enTitle: "beck's", price: 80},
    {imgSrc: "../images/Beer/stella.png", mkTitle: "стела", enTitle: "stella", price: 120},
    {imgSrc: "../images/Beer/tuborg.png", mkTitle: "туборг", enTitle: "tuborg", price: 100},
    {imgSrc: "../images/Beer/mugBig.png", mkTitle: "скопско кригла (0.5l)", enTitle: "skopsko mug", price: 100},
    {imgSrc: "../images/Beer/mugSmall.png", mkTitle: "скопско кригла (0.33l)", enTitle: "skopsko small mug", price: 90}
]
const liquors = [
    {imgSrc: "../images/Liquors250/Konjak.png", mkTitle: "коњак", enTitle: "cognac", price: 80},
    {imgSrc: "../images/Liquors250/Stock.png", mkTitle: "шток", enTitle: "stock", price: 90},
    {imgSrc: "../images/Liquors250/Vigor.png", mkTitle: "водка вигор", enTitle: "vodka vigor", price: 80},
    {imgSrc: "../images/Liquors250/Smirnoff.png", mkTitle: "водка смирноф", enTitle: "vodka smirnoff", price: 100},
    {imgSrc: "../images/Liquors250/GreyGoose.png", mkTitle: "греј гус", enTitle: "grey goose", price: 250},
    {imgSrc: "../images/Liquors250/SaxGin.png", mkTitle: "џин сакс", enTitle: "gin sax", price: 80},
    {imgSrc: "../images/Liquors250/GordonsGin.png", mkTitle: "џин гордонс", enTitle: "gin gordon's", price: 100},
    {imgSrc: "../images/Liquors250/GordonsPink.png", mkTitle: "гордонс пинк", enTitle: "gordon's pink", price: 120},
    {imgSrc: "../images/Liquors250/BombayGin.png", mkTitle: "џин бомбај", enTitle: "gin bombay", price: 100},
    {imgSrc: "../images/Liquors250/HendricksGin.png", mkTitle: "хендрикс џин", enTitle: "gin hendrick's", price: 250},
    {imgSrc: "../images/Liquors250/RumBadel.png", mkTitle: "рум бадел", enTitle: "badel rum", price: 90},
    {imgSrc: "../images/Liquors250/BacardiRum.png", mkTitle: "рум бакарди", enTitle: "bacardi rum", price: 110},
    {imgSrc: "../images/Liquors250/CapetanMorgan.png", mkTitle: "рум кептен морган", enTitle: "captain morgan rum", price: 100},
    {imgSrc: "../images/Liquors250/Jeger.png", mkTitle: "јегер", enTitle: "jagermeister", price: 130},
    {imgSrc: "../images/Liquors250/Pelinkovac.png", mkTitle: "пелинковец", enTitle: "pelinkovac", price: 80},
    {imgSrc: "../images/Liquors250/Baileys.png", mkTitle: "бејлис", enTitle: "baileys", price: 100},
    {imgSrc: "../images/Liquors250/Martini.png", mkTitle: "мартини", enTitle: "martini", price: 90},
    {imgSrc: "../images/Liquors250/Tsantali.png", mkTitle: "узо тсантали", enTitle: "ouzo tsantali", price: 80},
    {imgSrc: "../images/Liquors250/Plomari.png", mkTitle: "пломари узо", enTitle: "plomari ouzo", price: 90},
    {imgSrc: "../images/Liquors250/brandy.png", mkTitle: "вињак", enTitle: "brandy", price: 80},
    {imgSrc: "../images/Liquors250/tequilaMendoza.png", mkTitle: "текила", enTitle: "tequila", price: 70},
    {imgSrc: "../images/Liquors250/campari.png", mkTitle: "кампари", enTitle: "campari", price: 80},
    {imgSrc: "../images/Liquors250/jackDaniels.png", mkTitle: "џек даниелс", enTitle: "jack daniels", price: 200},
    {imgSrc: "../images/Liquors250/jameson.png", mkTitle: "џејмсон", enTitle: "jameson", price: 180},
    {imgSrc: "../images/Liquors250/ballantines.png", mkTitle: "балантајн", enTitle: "ballantines", price: 150},
    {imgSrc: "../images/Liquors250/redLabel.png", mkTitle: "џони вокер", enTitle: "johnie walker", price: 180},
    {imgSrc: "../images/Liquors250/blackLabel.png", mkTitle: "џ. блек", enTitle: "johnie black", price: 250},
    {imgSrc: "../images/Liquors250/chivas.png", mkTitle: "чивас", enTitle: "chivas", price: 250},
    {imgSrc: "../images/Liquors250/j&b.png", mkTitle: "Џ&Б", enTitle: "J&B", price: 150},
    {imgSrc: "../images/Liquors250/vigorWithJuice.png", mkTitle: "сечена водка", enTitle: "vodka w juice", price: 100},
    {imgSrc: "../images/Liquors250/smirnoffWithJuice.png", mkTitle: "сечен смирноф", enTitle: "smirnoff w juice", price: 110},
    {imgSrc: "../images/Liquors250/saxTonic.png", mkTitle: "џин тоник", enTitle: "gin tonic", price: 100},
    {imgSrc: "../images/Liquors250/rumCocaCola.png", mkTitle: "сечен рум", enTitle: "rum w juice", price: 90},
    {imgSrc: "../images/Liquors250/campariTonic.png", mkTitle: "кампари тоник", enTitle: "campari tonic", price: 110},
    {imgSrc: "../images/Liquors250/deepSeaBlueShot.png", mkTitle: "шат", enTitle: "shot", price: 100}
]
const wines = [
    {imgSrc: "../images/Wines250/MaloTraminec.png", mkTitle: "александрија траминец 0.2", enTitle: "alexandria traminec", price: 150},
    {imgSrc: "../images/Wines250/MaloBelo.png", mkTitle: "александрија бело 0.2", enTitle: "alexandria white", price: 150},
    {imgSrc: "../images/Wines250/MaloTemjanika.png", mkTitle: "александрија темјаника 0.2", enTitle: "alexandria temjanika", price: 150},
    {imgSrc: "../images/Wines250/MaloRoze.png", mkTitle: "александрија розе 0.2", enTitle: "alexandria rose", price: 150},
    {imgSrc: "../images/Wines250/MaloCrveno.png", mkTitle: "александрија црвено 0.2", enTitle: "alexandria red", price: 150},
    {imgSrc: "../images/Wines250/MaloTga.png", mkTitle: "т'га за југ 0.2", enTitle: "t'ga za jug", price: 150},
    {imgSrc: "../images/Wines250/tikvesTraminec.png", mkTitle: "александрија траминец 0.7", enTitle: "alexandria traminec", price: 600},
    {imgSrc: "../images/Wines250/alexandriaWhite.png", mkTitle: "александрија бело 0.7", enTitle: "alexandria white", price: 600},
    {imgSrc: "../images/Wines250/tikvesTemjanika.png", mkTitle: "александрија темјаника 0.7", enTitle: "alexandria temjanika", price: 600},
    {imgSrc: "../images/Wines250/alexandriaRoze.png", mkTitle: "александрија розе 0.7", enTitle: "alexandria rose", price: 600},
    {imgSrc: "../images/Wines250/alexandriaRed.png", mkTitle: "александрија црвено 0.7", enTitle: "alexandria red", price: 600},
    {imgSrc: "../images/Wines250/alexandriaTga.png", mkTitle:"т'га за југ 0.7", enTitle: "t'ga za jug", price: 600},
]
const cocktails = [
    {imgSrc: "../images/noimage.png", mkTitle: "bloody mary", enTitle: "rosa", price: 50},
    {imgSrc: "../images/noimage.png", mkTitle:"bloody mary", enTitle: "pelisterka", price: 50},
    {imgSrc: "../images/noimage.png", mkTitle:"bloody mary", enTitle: "knjaz milos", price: 50},
    {imgSrc: "../images/noimage.png", mkTitle:"bloody mary", enTitle: "dobra voda", price: 50},
    {imgSrc: "../images/noimage.png", mkTitle:"аперол шприц", enTitle: "aperol syringe", price: 160},
]
const others = [
    {imgSrc: "../images/Other/Shisha.png", mkTitle:"наргиле", enTitle: "hookah", price: 400},
    {imgSrc: "../images/Other/Sladoled.png", mkTitle:"сладолед", enTitle: "ice cream", price: 100},
    {imgSrc: "../images/Other/Apetisani.png", mkTitle:"апетисани", enTitle: "appetizers", price: 100},
    {imgSrc: "../images/Other/Honey.png", mkTitle:"мед", enTitle: "honey", price: 10}
]