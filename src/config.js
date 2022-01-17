const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Band horses";
const description = "Musician horses of blockchain";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "bnh",
  seller_fee_basis_points: 200,
  external_url: "https://bandhorses.com/",
  creators: [
    {
      address: "3ExDtohsVkLD5w2RcAhuWqkvMMSNcHesENNzhcZ7k3U2",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2222,
    layersOrder: [
      {
        name: "Background"
      },
      {
        name: "FavoriteDrummer",
        options: {
          displayName: "Favorite Drummer"
        }
      },
      { name: "Coat" },
      { name: "Neck" },
      {
        name: "NoseColor",
        options: {
          displayName: "Nose Color"
        }
      },
      {
        name: "EyeColor",
        options: {
          displayName: "Eye Color"
        }
      },
      { name: "Emotion" },
      {
        name: "Tattoo",
        options: {
          blend: MODE.multiply,
          opacity: 0.7
        }
      },
      { name: "Forehead" },
      { name: "Mane" },

    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 800,
  height: 800,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: -1,
  quality: 99,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height * 1.33 / format.width * 1.33,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "MIXED", // ASC, DESC, MIXED
  repeat: 0,
  quality: 99,
  delay: 700,
  imageName: "bhpreview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
