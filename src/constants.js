import SiproKozImage from "./assets/farmacy/sipro-koz.png";
import SiproImage from "./assets/farmacy/sipro.png";
import NoshpenImage from "./assets/farmacy/noshpen.png";
import AmpitsilinCapsulesImage from "./assets/farmacy/ampitsilin.png";
import AmoksitsilinImage from "./assets/farmacy/amoksitsilin.png";
import AmbroksolImage from "./assets/farmacy/ambroksol.png";
import MerAzimaksImage from "./assets/farmacy/merazimaks.png";
import MetronidazolInfusionImage from "./assets/farmacy/metronidazol.png";
import MetronidazolCapsulesImage from "./assets/farmacy/metronidazol-kap.png";
import LevomitsinImage from "./assets/farmacy/levomitsin.png";
import DyufamaksImage from "./assets/farmacy/dyufamaks.png";
import AsiklovirImage from "./assets/farmacy/asiklovir.png";
import AskorbinkaKislotasiImage from "./assets/farmacy/askorbinka-kislotasi.png";
import MrAntiprumImage from "./assets/farmacy/mr-antiprum.png";
import AniztizolImage from "./assets/farmacy/aniztizol.png";
import AnalginImage from "./assets/farmacy/analgin.png";
import AmpitsilinInjectionImage from "./assets/farmacy/ampitsilin.png";
import OksamrImage from "./assets/farmacy/oksamr.png";
import KitanalImage from "./assets/farmacy/kitanal.png";
import DirmovikMazImage from "./assets/farmacy/dirmovik-maz.png";

export const LANGUAGES = [
  { label: "Spanish", code: "es" },
  { label: "English", code: "en" },
  { label: "Italian", code: "it" },
];

export const CATEGORIES = {
  CAPSULES: "Капсулалар",
  EYE_DROPS: "Кўз томчилари",
  OINTMENTS: "Суртмалар",
  POWDERS: "Кукунлар",
  SOLUTION_FOR_INFUSIONS: "Инфузия учун эритмалар",
  SOLUTION_FOR_INJECTIONS: "Инъекцион эритмалар",
  SUPPOSITORIES: "Суппозиторийлар",
  SUSPENSIONS: "Суспензиялар",
  SYRUPS_AND_GALENIC_PREPARTIONS: "Сироп ва гален препаратлари",
  TABLETS: "Таблеткалар",
};

export const PRODUCTS = [
  {
    id: 1,
    name: "MЕР Дирмовийк суртма",
    image: DirmovikMazImage,
    category: CATEGORIES.OINTMENTS,
  },
  {
    id: 2,
    name: "MЕР Китанал гель",
    image: KitanalImage,
    category: CATEGORIES.OINTMENTS,
  },
  {
    id: 3,
    name: "MЕР Оксамр® инъекцион эритма тайёрлаш учун кукун",
    image: OksamrImage,
    category: CATEGORIES.POWDERS,
  },
  {
    id: 4,
    name: "MR Ампициллин натрий",
    image: AmpitsilinInjectionImage,
    category: CATEGORIES.POWDERS,
  },
  {
    id: 5,
    name: "MR Анальгин инъекция учун эритма 50%",
    image: AnalginImage,
    category: CATEGORIES.SOLUTION_FOR_INJECTIONS,
  },
  {
    id: 6,
    name: "MR Анестизол ректал суппозиториялар",
    image: AniztizolImage,
    category: CATEGORIES.SUPPOSITORIES,
  },
  {
    id: 7,
    name: "MR Аптиприм суспензия 240 мг/5мл",
    image: MrAntiprumImage,
    category: CATEGORIES.SUSPENSIONS,
  },
  {
    id: 8,
    name: "MR Аскорбин кислотаси инъекция учун эритма 5%",
    image: AskorbinkaKislotasiImage,
    category: CATEGORIES.SOLUTION_FOR_INJECTIONS,
  },
  {
    id: 9,
    name: "MR АЦИКЛОВИР таблеткалар",
    image: AsiklovirImage,
    category: CATEGORIES.TABLETS,
  },
  {
    id: 10,
    name: "MR Дюфамакс сироп 667мг/мл",
    image: DyufamaksImage,
    category: CATEGORIES.SYRUPS_AND_GALENIC_PREPARTIONS,
  },
  {
    id: 11,
    name: "MR Левомицетин кўз томчилари",
    image: LevomitsinImage,
    category: CATEGORIES.EYE_DROPS,
  },
  {
    id: 12,
    name: "MR Метронидазол",
    image: MetronidazolCapsulesImage,
    category: CATEGORIES.SUPPOSITORIES,
  },
  {
    id: 13,
    name: "MR Метронидазол инфузия учун эритма 500мг/100мл",
    category: CATEGORIES.SOLUTION_FOR_INFUSIONS,
    image: MetronidazolInfusionImage,
  },
  {
    id: 14,
    name: "MЕR Азимакс капсулалар",
    image: MerAzimaksImage,
    category: CATEGORIES.CAPSULES,
  },
  {
    id: 15,
    name: "Амброксол сироп 15мг/5мл",
    image: AmbroksolImage,
    category: CATEGORIES.SYRUPS_AND_GALENIC_PREPARTIONS,
  },
  {
    id: 16,
    name: "Амоксициллин суспензия тайёрлаш учун кукун",
    image: AmoksitsilinImage,
    category: CATEGORIES.SUSPENSIONS,
  },
  {
    id: 17,
    name: "Ампициллин капсулалар",
    image: AmpitsilinCapsulesImage,
    category: CATEGORIES.CAPSULES,
  },
  {
    id: 18,
    name: "Нош-пен MR таблеткалар",
    image: NoshpenImage,
    category: CATEGORIES.TABLETS,
  },
  {
    id: 19,
    name: "Ципро MЕР инфузия учун эритма 2мг/мл",
    image: SiproImage,
    category: CATEGORIES.SOLUTION_FOR_INFUSIONS,
  },
  {
    id: "20",
    name: "ЦИПРО MЕР кўз томчилари",
    image: SiproKozImage,
    category: CATEGORIES.EYE_DROPS,
  },
];
