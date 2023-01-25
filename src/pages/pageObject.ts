import { IPageDbJson } from "../@types/global";

const pageDbJson: IPageDbJson = {
  portailDescartes: {
    title: "Portail Descartes",
    domainSection: [
      {
        title: "Math",
        teachingUnitsS1: [
          {
            title: "Outils Mathématique",
            chapters: [
              {
                title: "Global",
                revionSheets: [
                  {
                    title: "Résumé Formule",
                    descriptions:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate lectus orci",
                    userName: "Yanis Gerst",
                    like: 0,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                  },
                  {
                    title: "Résumé Démonstration",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                  },
                  {
                    title: "Résumé Démonstration",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                  },
                  {
                    title: "Résumé Démonstration",
                    descriptions:
                      "Condensée de toutes les démonstratoin de L'UE",
                    userName: "Yanis Gerst",
                    like: 24,
                    yearOfPublication: 2023,
                    pdfUrl: "",
                  },
                ],
                exercicesSheets: [],
              },
              {
                title: "Calcul Vectoriel et Géométrie analytique",
                revionSheets: [],
                exercicesSheets: [],
              },
            ],
          },
          {
            title: "Language Mathématique",
            chapters: [
              {
                title: "Notion de base et raisonnement mathématique",
                revionSheets: [],
                exercicesSheets: [],
              },
              {
                title: "Théorie des ensembles",
                revionSheets: [],
                exercicesSheets: [],
              },
            ],
          },
        ],
        teachingUnitsS2: [
          {
            title: "Algèbre Linéaire",
            chapters: [],
          },
          {
            title: "Analyse",
            chapters: [],
          },
        ],
      },
      {
        title: "Informatique",
        teachingUnitsS1: [
          {
            title: "Mise en oeuvre informatique",
            chapters: [],
          },
          {
            title: "Introductin à l'informatique",
            chapters: [],
          },
          {
            title: "Science Informatique",
            chapters: [],
          },
          {
            title: "Projet Informatique",
            chapters: [],
          },
        ],
        teachingUnitsS2: [
          {
            title: "Fonctionnement des ordinateurs",
            chapters: [],
          },
          {
            title: "Programmation",
            chapters: [],
          },
        ],
      },
      {
        title: "Physique",
        teachingUnitsS1: [],
        teachingUnitsS2: [],
      },
      {
        title: "Méca",
        teachingUnitsS1: [],
        teachingUnitsS2: [],
      },
      {
        title: "Divers",
        teachingUnitsS1: [],
        teachingUnitsS2: [],
      },
    ],
  },
  l2: {
    informatique: {
      title: "L2 Info",
      domainSection: [],
    },
    mathematique: {
      title: "L2 Mathematique",
      domainSection: [],
    },
    mecanique: {
      title: "L2 Mecanique",
      domainSection: [],
    },
    physique: {
      title: "L2 Phyisque",
      domainSection: [],
    },
  },
};

export default pageDbJson;
