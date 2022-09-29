const coffees = [
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle: "еспресо", enTitle: "espresso", price: 60},
    {imgSrc: "../images/Coffee/fredoEspresso.png", mkTitle:"фредо еспресо", enTitle: "fredo espresso", price: 70},
    {imgSrc: "../images/Coffee/macchiato.png", mkTitle:"макијато", enTitle: "macchiato", price: 70},
    {imgSrc: "../images/Coffee/shortMacchiato.png", mkTitle:"мало макијато", enTitle: "short macchiato", price: 60},
    {imgSrc: "../images/Coffee/latteMacchiato.png", mkTitle:"лате макијато", enTitle: "latte macchiato", price: 80},
    {imgSrc: "../images/Coffee/latteMacchiato.png", mkTitle:"лате макијато со вкус", enTitle: "latte macchiato flavor", price: 90},
    {imgSrc: "../images/Coffee/capuccino.png", mkTitle:"капучино", enTitle: "capuccino", price: 80},
    {imgSrc: "../images/Coffee/latteCapuccino.png", mkTitle:"лате капучино", enTitle: "latte capuccino", price: 90},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"фредо капучино", enTitle: "fredo capuccino", price: 80},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"мафијашко", enTitle: "mafijasko", price: 70},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"нескафе", enTitle: "nescafe", price: 80},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"попаренo нескафе", enTitle: "steamed nescafe", price: 60},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"топло чоколадо", enTitle: "hot chocolate", price: 100},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"топло чоколадо плазма", enTitle: "hot chocolate plazma", price: 110},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"топло чоколадо со орео", enTitle: "hot chocolate with oreo", price: 100},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"какао", enTitle: "cocoa", price: 70},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"какао со млеко", enTitle: "cocoa with milk", price: 80},
    {imgSrc: "../images/Coffee/espressoSmall.png", mkTitle:"безкофеинско", enTitle: "decaffeinated", price: 70}
]
const nonAlhoholic = [
    {imgSrc: "../images/Sodas250/CocaCola.png", mkTitle:"кока кола", enTitle: "coca cola", price: 60},
    {imgSrc: "../images/Sodas250/CocaColaZero.png", mkTitle:"кока кола зеро", enTitle: "coca cola zero", price: 60},
    {imgSrc: "../images/Sodas250/Schweppes.png", mkTitle:"швепс", enTitle: "schweppes", price: 60},
    {imgSrc: "../images/Sodas250/SchweppesTangerina.png", mkTitle:"швепс танџерина", enTitle: "schweppes tangerine", price: 60},
    {imgSrc: "../images/Sodas250/SchweppesTonic.png", mkTitle:"швепс тоник", enTitle: "schweppes tonic", price: 60},
    {imgSrc: "../images/Sodas250/Fanta.png", mkTitle:"фанта", enTitle: "fanta", price: 60},
    {imgSrc: "../images/Sodas250/FantaTropical.png", mkTitle:"фанта тропикал", enTitle: "fanta tropical", price: 60},
    {imgSrc: "../images/Sodas250/FantaShokata.png", mkTitle:"фанта шоката", enTitle: "fanta shokata", price: 60},
    {imgSrc: "../images/Sodas250/Sprite.png", mkTitle:"спрајт", enTitle: "sprite", price: 60},
    {imgSrc: "../images/Sodas250/Pepsi.png", mkTitle:"пепси", enTitle: "pepsi", price: 50},
    {imgSrc: "../images/Sodas250/PepsiZero.png", mkTitle:"пепси зеро", enTitle: "pepsi zero", price: 50},
    {imgSrc: "../images/Sodas250/Gazoza.png", mkTitle:"газоза", enTitle: "gazoza", price: 50},
    {imgSrc: "../images/Sodas250/7up.png", mkTitle:"севен ап", enTitle: "seven up", price: 50},
    {imgSrc: "../images/Sodas250/Mirinda.png", mkTitle:"миринда", enTitle: "mirinda", price: 50},
    {imgSrc: "../images/Sodas250/Cockta.png", mkTitle:"кокта", enTitle: "cocta", price: 60},
    {imgSrc: "../images/Sodas250/PellegrinoKalinka.png", mkTitle:"сан пелегрино калинка+портокал", enTitle: "san pellegrino melograno & arancia", price: 90},
    {imgSrc: "../images/Sodas250/PellegrinoMenta.png", mkTitle:"сан пелегрино лимон+мента", enTitle: "san pellegrino limone & menta", price: 90},
    {imgSrc: "../images/Sodas250/PellegrinoLimon.png", mkTitle:"сан пелегрино лимоната", enTitle: "san pellegrino limonata", price: 90},
    {imgSrc: "../images/Sodas250/RedBull.png", mkTitle:"ред бул", enTitle: "red bull", price: 150},
    {imgSrc: "../images/bravo.png", mkTitle:"чај", enTitle: "tea", price: 60},
    {imgSrc: "../images/Sodas250/Nektarchinja.png", mkTitle:"нектар", enTitle: "nectar", price: 80},
    {imgSrc: "../images/Sodas250/Mango.png", mkTitle:"нектар манго", enTitle: "nectar mango", price: 80},
    {imgSrc: "../images/Sodas250/Cedevita.png", mkTitle:"цедевита", enTitle: "cedevita", price: 50},
    {imgSrc: "../images/Sodas250/OrangeJuice.png", mkTitle:"цеден портокал", enTitle: "squeezed orange", price: 100},
    {imgSrc: "../images/Sodas250/LemonJuice.png", mkTitle:"цеден лимон", enTitle: "squeezed lemon", price: 80},
    {imgSrc: "../images/Sodas250/MixOrangeLemon.png", mkTitle:"цеден микс пл", enTitle: "squeezed mix", price: 120},
]
const waters = [
    {imgSrc: "../images/Waters250/PelisterkaNegazirana.png", mkTitle:"пелистерка", enTitle: "pelisterka", price: 50},
    {imgSrc: "../images/Waters250/PelisterkaGazirana.png", mkTitle:"пелистерка газирана", enTitle: "pelisterka sparkling", price: 50},
    {imgSrc: "../images/Waters250/Rosa.png", mkTitle:"роса", enTitle: "rosa", price: 50},
    {imgSrc: "../images/Waters250/KnjazWater.png", mkTitle:"књаз милош", enTitle: "knjaz milos", price: 50}
]
const beers = [
    {imgSrc: "../images/amstelBeer.png", mkTitle: "скопско", enTitle: "skopsko", price: 90},
    {imgSrc: "../images/amstelBeer.png", mkTitle: "златен даб", enTitle: "zlaten dab", price: 90},
    {imgSrc: "../images/amstelBeer.png", mkTitle: "хајнекен", enTitle: "heineken", price: 130},
    {imgSrc: "../images/amstelBeer.png", mkTitle: "амстел", enTitle: "amstel", price: 100},
    {imgSrc: "../images/amstelBeer.png", mkTitle: "бекс", enTitle: "beck's", price: 80},
    {imgSrc: "../images/amstelBeer.png", mkTitle: "стела", enTitle: "stella", price: 120},
    {imgSrc: "../images/amstelBeer.png", mkTitle: "туборг", enTitle: "tuborg", price: 100},
    {imgSrc: "../images/amstelBeer.png", mkTitle: "скопско кригла (0.5l)", enTitle: "skopsko mug", price: 100},
    {imgSrc: "../images/amstelBeer.png", mkTitle: "скопско кригла (0.33l)", enTitle: "skopsko small mug", price: 90}
]
const liquors = [
    {imgSrc: "../images/bacardi.png", mkTitle: "коњак", enTitle: "cognac", price: 80},
    {imgSrc: "../images/bacardi.png", mkTitle: "шток", enTitle: "stock", price: 90},
    {imgSrc: "../images/bacardi.png", mkTitle: "водка смирноф", enTitle: "vodka smirnoff", price: 100},
    {imgSrc: "../images/bacardi.png", mkTitle: "водка вигор", enTitle: "vodka vigor", price: 80},
    {imgSrc: "../images/bacardi.png", mkTitle: "сечена водка", enTitle: "vodka w juice", price: 100},
    {imgSrc: "../images/bacardi.png", mkTitle: "сечен смирноф", enTitle: "smirnoff w juice", price: 110},
    {imgSrc: "../images/bacardi.png", mkTitle: "џин сакс", enTitle: "gin sax", price: 80},
    {imgSrc: "../images/bacardi.png", mkTitle: "џин гордонс", enTitle: "gin gordon's", price: 100},
    {imgSrc: "../images/bacardi.png", mkTitle: "џин бомбај", enTitle: "gin bombay", price: 100},
    {imgSrc: "../images/bacardi.png", mkTitle: "хендрикс џин", enTitle: "gin hendrick's", price: 250},
    {imgSrc: "../images/bacardi.png", mkTitle: "џин тоник", enTitle: "gin tonic", price: 100},
    {imgSrc: "../images/bacardi.png", mkTitle: "гордонс пинк", enTitle: "gordon's pink", price: 120},
    {imgSrc: "../images/bacardi.png", mkTitle: "рум бадел", enTitle: "badel rum", price: 90},
    {imgSrc: "../images/bacardi.png", mkTitle: "рум бакарди", enTitle: "bacardi rum", price: 110},
    {imgSrc: "../images/bacardi.png", mkTitle: "рум кептен морган", enTitle: "captain morgan rum", price: 100},
    {imgSrc: "../images/bacardi.png", mkTitle: "сечен рум", enTitle: "rum w juice", price: 90},
    {imgSrc: "../images/bacardi.png", mkTitle: "мартини", enTitle: "martini", price: 90},
    {imgSrc: "../images/bacardi.png", mkTitle: "узо", enTitle: "ouzo", price: 80},
    {imgSrc: "../images/bacardi.png", mkTitle: "плумари узо", enTitle: "plumari ouzo", price: 90},
    {imgSrc: "../images/bacardi.png", mkTitle: "вињак", enTitle: "brandy", price: 80},
    {imgSrc: "../images/bacardi.png", mkTitle: "текила", enTitle: "tequila", price: 70},
    {imgSrc: "../images/bacardi.png", mkTitle: "јегер", enTitle: "jagermeister", price: 130},
    {imgSrc: "../images/bacardi.png", mkTitle: "џек даниелс", enTitle: "jack daniels", price: 200},
    {imgSrc: "../images/bacardi.png", mkTitle: "џејмсон", enTitle: "jameson", price: 180},
    {imgSrc: "../images/bacardi.png", mkTitle: "балантајн", enTitle: "ballantines", price: 150},
    {imgSrc: "../images/bacardi.png", mkTitle: "џони вокер", enTitle: "johnie walker", price: 180},
    {imgSrc: "../images/bacardi.png", mkTitle: "чивас", enTitle: "chivas", price: 250},
    {imgSrc: "../images/bacardi.png", mkTitle: "Џ&Б", enTitle: "J&B", price: 150},
    {imgSrc: "../images/bacardi.png", mkTitle: "пелинковец", enTitle: "pelinkovac", price: 80},
    {imgSrc: "../images/bacardi.png", mkTitle: "бејлис", enTitle: "baileys", price: 100},
    {imgSrc: "../images/bacardi.png", mkTitle: "кампари", enTitle: "campari", price: 80},
    {imgSrc: "../images/bacardi.png", mkTitle: "кампари тоник", enTitle: "campari tonic", price: 110},
    {imgSrc: "../images/bacardi.png", mkTitle: "џ. блек", enTitle: "johnie black", price: 250},
    {imgSrc: "../images/bacardi.png", mkTitle: "шат", enTitle: "shot", price: 100},
    {imgSrc: "../images/bacardi.png", mkTitle: "бомбај", enTitle: "bombay", price: 2400},
    {imgSrc: "../images/bacardi.png", mkTitle: "греј гус", enTitle: "grey goose", price: 5000},
    {imgSrc: "../images/bacardi.png", mkTitle: "џони блек", enTitle: "johnie black", price: 5000}
]
const wines = [
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија бело 0.2", enTitle: "alexandria white", price: 150},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија бело куве 0.2", enTitle: "alexandria white cuvee", price: 250},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија црвено 0.2", enTitle: "alexandria red", price: 150},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија црвено куве 0.2", enTitle: "alexandria red cuvee", price: 250},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија розе 0.2", enTitle: "alexandria rose", price: 150},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија бело 0.7", enTitle: "alexandria white", price: 600},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија 0.7 бело куве", enTitle: "alexandria white cuvee", price: 800},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија црвено 0.7", enTitle: "alexandria red", price: 600},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија црвено куве 0.7", enTitle: "alexandria red cuvee", price: 800},
    {imgSrc: "../images/beloVino.png", mkTitle: "александрија розе 0.7", enTitle: "alexandria rose", price: 600},
    {imgSrc: "../images/beloVino.png", mkTitle: "т'га за југ 0.2", enTitle: "t'ga za jug small", price: 150},
    {imgSrc: "../images/beloVino.png", mkTitle:"т'га за југ 0.7", enTitle: "t'ga za jug big", price: 600},
    {imgSrc: "../images/beloVino.png", mkTitle: "траминец 0.2", enTitle: "traminec small", price: 150},
    {imgSrc: "../images/beloVino.png", mkTitle:"траминец 0.7", enTitle: "traminec big", price: 600}
]
const cocktails = [
    {imgSrc: "../images/cocktail.png", mkTitle: "bloody mary", enTitle: "rosa", price: 50},
    {imgSrc: "../images/cocktail.png", mkTitle:"bloody mary", enTitle: "pelisterka", price: 50},
    {imgSrc: "../images/cocktail.png", mkTitle:"bloody mary", enTitle: "knjaz milos", price: 50},
    {imgSrc: "../images/cocktail.png", mkTitle:"bloody mary", enTitle: "dobra voda", price: 50},
    {imgSrc: "../images/bravo.png", mkTitle:"аперол шприц", enTitle: "aperol syringe", price: 160},
]
const others = [
    {imgSrc: "../images/Other250/Shisha.png", mkTitle:"наргиле", enTitle: "hookah", price: 450},
    {imgSrc: "../images/Other250/Sladoled.png", mkTitle:"сладолед", enTitle: "ice cream", price: 100},
    {imgSrc: "../images/Other250/Apetisani.png", mkTitle:"апетисани", enTitle: "appetizers", price: 100},
    {imgSrc: "../images/Other250/Honey.png", mkTitle:"мед", enTitle: "honey", price: 10}
]