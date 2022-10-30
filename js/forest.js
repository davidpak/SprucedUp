"use strict";

const IMG = "assets/img/tree-solid.svg";
(function() {
  window.addEventListener("load", init);

  function init() {
    var map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(47.6115, -122.34418),
    zoom: 12,
    });

    let lng = [
      -122.344181600431,
      -122.352724284823,
      -122.283974255915,
      -122.361100975756,
      -122.390183812438,
      -122.275655282476,
      -122.346761999089,
      -122.374471310207,
      -122.334442372956,
      -122.397644668445,
      -122.338582767729,
      -122.336582078548,
      -122.300411238334,
      -122.327869850331,
      -122.295645125446,
      -122.382446186857,
      -122.388785421052,
      -122.277856036977,
      -122.373264334039,
      -122.34991582101,
      -122.325091373657,
      -122.281863019104,
      -122.305705280264,
      -122.332795269529,
      -122.394313374103,
      -122.296840673727,
      -122.326811604374,
      -122.315007378329,
      -122.379714884323,
      -122.377230854596,
      -122.393868779484,
      -122.316593282572,
      -122.374531150083,
      -122.382727237865,
      -122.263308643195,
      -122.291020154981,
      -122.371117511622,
      -122.340310089675,
      -122.354827628421,
      -122.366173178537,
      -122.401842488389,
      -122.348080267835,
      -122.382930597155,
      -122.323763087928,
      -122.301867346811,
      -122.374837336222,
      -122.306375599808,
      -122.258311542622,
      -122.286685657703,
      -122.325339452294,
      -122.3441683055,
      -122.301652223977,
      -122.385708632708,
      -122.36325494618,
      -122.268290268465,
      -122.309097765748,
      -122.371079908483,
      -122.388649801706,
      -122.361628897187,
      -122.317890851638,
      -122.357006134395,
      -122.368227791623,
      -122.379263862162,
      -122.283221997748,
      -122.32570232022,
      -122.372210843239,
      -122.34082158398,
      -122.316654691258,
      -122.30193128872,
      -122.283881554722,
      -122.341603088369,
      -122.294823343936,
      -122.321933426375,
      -122.330843681403,
      -122.336623206721,
      -122.376912659968,
      -122.313513289598,
      -122.372836232041,
      -122.315594713117,
      -122.288683876775,
      -122.402261088103,
      -122.313678949986,
      -122.337885276305,
      -122.291076934792,
      -122.325086370296,
      -122.325062481662,
      -122.284360664495,
      -122.318038307739,
      -122.305384404668,
      -122.309332725756,
      -122.347747285005,
      -122.3881481122,
      -122.368797701449,
      -122.30755815539,
      -122.360270717926,
      -122.313865415678,
      -122.289878643358,
      -122.371208794605,
      -122.33106262917,
      -122.352127395101,
      -122.299619594321,
      -122.374372307942,
      -122.405773165331,
      -122.392542303006,
      -122.408165275003,
      -122.343550113425,
      -122.299117688169,
      -122.376141581865,
      -122.389142607607,
      -122.260249424276,
      -122.372496529271,
      -122.297638961932,
      -122.339085706166,
      -122.373540556474,
      -122.278878814454,
      -122.380391243497,
      -122.373691622016,
      -122.325938974086,
      -122.369365623953,
      -122.299514804076,
      -122.360546852413,
      -122.310231387234,
      -122.356800334423,
      -122.376883011876,
      -122.315912888751,
      -122.354590414812,
      -122.399903715201,
      -122.377352255761,
      -122.371092371243,
      -122.302822414809,
      -122.28359026129,
      -122.362773813291,
      -122.320284290091,
      -122.288093684737,
      -122.314291705755,
      -122.335065021022,
      -122.333935792022,
      -122.378456028076,
      -122.321753108965,
      -122.360056048228,
      -122.409339089582,
      -122.340550362743,
      -122.330528431353,
      -122.316749237393,
      -122.359173728763,
      -122.409450411708,
      -122.267379196855,
      -122.310762511853,
      -122.38665727619,
      -122.341186182684,
      -122.384301168274,
      -122.30650402016,
      -122.376451939691,
      -122.289371815729,
      -122.303163032037,
      -122.39430398234,
      -122.344090855367,
      -122.388452458245,
      -122.380699412199,
      -122.392794949976,
      -122.320408788671,
      -122.310365191848,
      -122.29592292478,
      -122.317182470509,
      -122.40203221425,
      -122.302077166556,
      -122.342176300159,
      -122.35383759038,
      -122.347887028033,
      -122.374158136198,
      -122.375444976976,
      -122.292012309165,
      -122.287172120842,
      -122.337923479606,
      -122.348535102119,
      -122.354848371873,
      -122.387603088771,
      -122.376758475592,
      -122.301117352965,
      -122.308441234811,
      -122.308362953072,
      -122.376075110366,
      -122.341018630011,
      -122.351782610012,
      -122.313645111151,
      -122.36016526779,
      -122.339177155218,
      -122.318711377094,
      -122.361645701478,
      -122.295456402506,
      -122.294539204242,
      -122.274765353243,
      -122.309882798287,
      -122.368659206214,
      -122.38099873609,
      -122.323420910045,
      -122.354352180666,
      -122.352700001828,
      -122.323220989622,
      -122.311016502762,
      -122.383639233657,
      -122.401196763976,
      -122.374131470432,
      -122.331546085439,
      -122.316713819757,
      -122.369355536102,
      -122.378982670943,
      -122.346524380372,
      -122.373162175165,
      -122.329766321854,
      -122.377538997289,
      -122.369061078874,
      -122.25565612361,
      -122.338588201185,
      -122.314100957696,
      -122.378064197677,
      -122.272728249555,
      -122.280853692924,
      -122.354200001513,
      -122.302398912941,
      -122.322222896197,
      -122.316664618862,
      -122.323974009132,
      -122.377927598787,
      -122.309623869836,
      -122.389680879198,
      -122.400537258895,
      -122.370805424795,
      -122.364435022972,
      -122.30661845134,
      -122.315697061449,
      -122.360444989376,
      -122.403695469495,
      -122.337735179258,
      -122.281015987372,
      -122.346488456767,
      -122.38447675638,
      -122.3170429553,
      -122.355254653274,
      -122.333992881957,
      -122.305332821378
    ]

    let lat = [
      47.6115037078433,
      47.6761784433266,
      47.6320019827551,
      47.5489655712988,
      47.6696796947709,
      47.5675205477503,
      47.5345013265818,
      47.5838396690151,
      47.6217754797184,
      47.651397692352,
      47.654468108746,
      47.697240042341,
      47.640349072788,
      47.7085309966947,
      47.7185869322056,
      47.5741196584838,
      47.6882423939395,
      47.6735904589576,
      47.5718603878287,
      47.6588759024337,
      47.612929155276,
      47.5339882950159,
      47.6000639535828,
      47.6027756908018,
      47.6463582489821,
      47.7211454286576,
      47.6353686828429,
      47.7104187438328,
      47.6708580847281,
      47.6657658391951,
      47.6919915305149,
      47.6372959554801,
      47.6553915695082,
      47.5630023118818,
      47.6720602575948,
      47.6610647583814,
      47.5381554237238,
      47.634384769715,
      47.6711955441947,
      47.6674660077551,
      47.6347372914025,
      47.5233598952526,
      47.6448856913211,
      47.6612633758462,
      47.7308486035538,
      47.651754528616,
      47.5600485598964,
      47.5074345834809,
      47.5240678220833,
      47.5255736168877,
      47.6649581491884,
      47.67955990891,
      47.5609951231622,
      47.5297594516963,
      47.5503450131791,
      47.6700877446237,
      47.5717638046981,
      47.6863053800897,
      47.6672360338084,
      47.7056342232953,
      47.6689289377301,
      47.6284255482357,
      47.5712043025321,
      47.6323735073546,
      47.5516647198003,
      47.6496185941276,
      47.6246012809832,
      47.6100155064718,
      47.6463344267924,
      47.6360946867803,
      47.5291117494586,
      47.701185536688,
      47.6240925199372,
      47.6207569651356,
      47.662059145657,
      47.6772044099866,
      47.6362384731448,
      47.684222295432,
      47.5845065950025,
      47.6702774474453,
      47.5780296213952,
      47.6734459403558,
      47.6063398660802,
      47.6744278879686,
      47.6243615944797,
      47.659985697661,
      47.6298583176824,
      47.6370385655102,
      47.7230381972269,
      47.6702398583756,
      47.6165674339534,
      47.5734390609198,
      47.6449834835646,
      47.6379973553991,
      47.6534805268091,
      47.6079771627981,
      47.7300634884416,
      47.642810781996,
      47.7261283676358,
      47.6832608072717,
      47.6836596448495,
      47.5184743996661,
      47.6407212335742,
      47.6830642301713,
      47.5790969329004,
      47.6584828215513,
      47.7056945914694,
      47.5551235011935,
      47.5579269026164,
      47.5198248471813,
      47.6411898819445,
      47.6758448001992,
      47.5383158112452,
      47.653142754571,
      47.6772297872353,
      47.5611448560689,
      47.6489331424209,
      47.7029658689152,
      47.6359050486276,
      47.6734536204984,
      47.5324464450774,
      47.5778040057129,
      47.6702129703048,
      47.5297949538271,
      47.5866738202231,
      47.5264889135495,
      47.6377679354518,
      47.6525140655427,
      47.5434164724768,
      47.6763885893345,
      47.7129491966252,
      47.5582927963165,
      47.6994359798052,
      47.5282339969434,
      47.6033372409456,
      47.7003996342941,
      47.6530207866294,
      47.6777676899183,
      47.5282101284611,
      47.7022791833632,
      47.6450334104515,
      47.7340593720893,
      47.6758964638454,
      47.701220770686,
      47.5262733757961,
      47.5780426284557,
      47.517773521589,
      47.6793703350636,
      47.5680923612423,
      47.6327468967564,
      47.554365333541,
      47.6252744544709,
      47.5375702130932,
      47.5782769359545,
      47.6679807729705,
      47.6478952745745,
      47.6521563060402,
      47.5516949396693,
      47.5212027610717,
      47.6699315716894,
      47.6383594332843,
      47.5725087251507,
      47.6032011851102,
      47.5868643886181,
      47.5693211831894,
      47.7336648467651,
      47.6631679351272,
      47.5346091755764,
      47.7337182207642,
      47.7072066247118,
      47.6630161676079,
      47.5837692536487,
      47.6236338005464,
      47.6636217840968,
      47.6358979967713,
      47.544530203566,
      47.5856125110422,
      47.5327833645548,
      47.6191234163566,
      47.6615505825661,
      47.666945088513,
      47.6747349236032,
      47.6650971892937,
      47.5279357134944,
      47.5811014170583,
      47.6256619748954,
      47.6875621485324,
      47.6868079516729,
      47.6503541385492,
      47.624586654364,
      47.5400194237184,
      47.6638846585341,
      47.6260572465235,
      47.6734804781263,
      47.5611393291131,
      47.6814681546595,
      47.6341298590467,
      47.621715998794,
      47.7018157433824,
      47.7021040728318,
      47.5592721349661,
      47.6693457456522,
      47.6386938282944,
      47.6851428307219,
      47.6278673984752,
      47.5448173329215,
      47.6644832989927,
      47.5364428435965,
      47.5642863289226,
      47.6516386807678,
      47.6730369647635,
      47.6364962644022,
      47.5034895610622,
      47.6218827953133,
      47.6037856853774,
      47.5726958276299,
      47.5344109652829,
      47.5506619557567,
      47.7075849995944,
      47.6205180654818,
      47.6165786232453,
      47.6040949106721,
      47.6456813248276,
      47.6852938074132,
      47.696645890248,
      47.6809385674763,
      47.6594747699323,
      47.6406991160126,
      47.5257921609676,
      47.6042741096974,
      47.6203066023218,
      47.6302084112831,
      47.6399422558783,
      47.6618613731851,
      47.5558031934508,
      47.6803717129822,
      47.6702450949536,
      47.640259679345,
      47.6767671092477,
      47.6727085457425,
      47.6801589741765,
      47.5416344689984,
      47.640096323731,
      47.5649115053994,
      47.575933219079,
      47.6672620478801,
      47.5274870851228,
      47.5659181516195,
      47.6706610792728,
      47.5816715981383,
      47.5935308426769,
      47.6787055386268,
      47.5272553439052,
      47.6949470367562,
      47.698918738929
    ]

    let features = [];
    for (let i = 0; i < lng.length; i++) {
      features.push({position: new google.maps.LatLng(lat[i], lng[i])});
    }

    const icon = {
      url: IMG,
      scaledSize: new google.maps.Size(20,20), // scaled size
    };

      for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
          position: features[i].position,
          icon: icon,
          map: map,
          // scaledSize: new google.maps.Size(20, 20),
          anchor: new google.maps.Point(15, 30),
        });
      }
  };
})();