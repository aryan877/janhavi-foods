"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Utensils,
  ArrowDownCircle,
  ArrowUpCircle,
  Info,
  Sun,
  Search,
} from "lucide-react";

const HormoneCard = ({
  number,
  title,
  foods,
  description,
}: {
  number: number;
  title: string;
  foods: string[];
  description: string;
}) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-lg font-semibold text-blue-700">
        {number}. {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-2 text-gray-600">{description}</p>
      <ul className="list-disc pl-5 space-y-1">
        {foods.map((food, index) => (
          <li key={index} className="text-base text-gray-800">
            {food}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const SeasonalFoods = ({
  season,
  foods,
}: {
  season: string;
  foods: string[];
}) => (
  <Card className="mb-4 bg-green-50">
    <CardHeader>
      <CardTitle className="text-lg font-semibold text-green-700">
        {season}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5">
        {foods.map((food, index) => (
          <li key={index} className="text-green-800">
            {food}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const HormonesFoodGuide = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const negativeEmotionsHormones = [
    {
      title: "Cortisol (Stress Hormone)",
      foods: [
        "Dark chocolate",
        "Ashwagandha tea",
        "Tulsi (Holy Basil) tea",
        "Mosambi (Sweet Lime)",
        "Santras (Oranges)",
      ],
      description:
        "These foods can help reduce cortisol levels and manage stress.",
    },
    {
      title: "Adrenaline (Epinephrine)",
      foods: [
        "Palak (Spinach)",
        "Methi (Fenugreek leaves)",
        "Brown rice",
        "Jowar (Sorghum)",
        "Bajra (Pearl Millet)",
        "Badam (Almonds)",
        "Flaxseeds",
      ],
      description:
        "These foods can help lower adrenaline levels and promote relaxation.",
    },
    {
      title: "Norepinephrine",
      foods: ["Flaxseeds", "Akhrot (Walnuts)", "Green tea", "Kela (Bananas)"],
      description:
        "These foods can help regulate norepinephrine levels and support emotional balance.",
    },
    {
      title: "Serotonin (Low Levels)",
      foods: [
        "Bhakri (made from Jowar or Bajra)",
        "Oats",
        "Dahi (Yogurt)",
        "Idli",
        "Dosa",
        "Akhrot (Walnuts)",
        "Flaxseeds",
      ],
      description:
        "These foods can help boost serotonin levels and improve mood.",
    },
    {
      title: "Dopamine (Low Levels)",
      foods: [
        "Dal (Lentils)",
        "Chole (Chickpeas)",
        "Kela (Bananas)",
        "Dahi (Yogurt)",
        "Paneer",
      ],
      description:
        "These foods can help increase dopamine levels and enhance pleasure.",
    },
    {
      title: "Estrogen",
      foods: ["Flaxseeds", "Tofu", "Soy milk", "Til (Sesame seeds)"],
      description:
        "These foods can help balance estrogen levels and support hormonal health.",
    },
    {
      title: "Progesterone",
      foods: [
        "Kela (Bananas)",
        "Shakarkandi (Sweet Potatoes)",
        "Palak (Spinach)",
        "Dark chocolate",
        "Kaddu ke beej (Pumpkin seeds)",
        "Chole (Chickpeas)",
      ],
      description:
        "These foods can help increase progesterone levels and support reproductive health.",
    },
    {
      title: "Testosterone",
      foods: [
        "Olive oil",
        "Avocados",
        "Chicken",
        "Fish (Pomfret, Surmai)",
        "Ande (Eggs)",
        "Chole (Chickpeas)",
      ],
      description:
        "These foods can help boost testosterone levels and support overall health.",
    },
  ];

  const positiveEmotionsHormones = [
    {
      title: "Serotonin (Boosting)",
      foods: [
        "Brown rice",
        "Whole wheat bread",
        "Idli",
        "Dahi (Yogurt)",
        "Badam (Almonds)",
        "Flaxseeds",
      ],
      description:
        "These foods can help boost serotonin levels, improving mood and well-being.",
    },
    {
      title: "Dopamine (Boosting)",
      foods: [
        "Dal (Lentils)",
        "Chicken",
        "Kela (Bananas)",
        "Doodh (Milk)",
        "Paneer",
      ],
      description:
        "These foods can help increase dopamine levels, enhancing pleasure and motivation.",
    },
    {
      title: "Oxytocin",
      foods: [
        "Dark chocolate",
        "Aam (Mangoes)",
        "Strawberries (seasonal)",
        "Akhrot (Walnuts)",
        "Flaxseeds",
      ],
      description:
        "These foods can stimulate oxytocin release, promoting social bonding and emotional well-being.",
    },
    {
      title: "Endorphins",
      foods: [
        "Green chilies",
        "Red chili powder",
        "Dark chocolate",
        "Pudina (Mint) tea",
      ],
      description:
        "These foods can help release endorphins, promoting feelings of happiness and relaxation.",
    },
    {
      title: "Endocannabinoids",
      foods: [
        "Flaxseeds",
        "Chia seeds",
        "Palak (Spinach)",
        "Methi (Fenugreek leaves)",
        "Akhrot (Walnuts)",
      ],
      description:
        "These foods can help boost endocannabinoid levels, supporting overall well-being.",
    },
    {
      title: "GABA (Gamma-Aminobutyric Acid)",
      foods: [
        "Green tea",
        "Dahi (Yogurt)",
        "Homemade pickles",
        "Palak (Spinach)",
        "Dark chocolate",
      ],
      description:
        "These foods can help increase GABA levels, promoting relaxation and reducing anxiety.",
    },
  ];

  const seasonalFoods = [
    {
      season: "Summer (March-June)",
      foods: [
        "Mangoes (Alphonso, Kesar)",
        "Watermelon",
        "Kokum (for cooling drinks)",
      ],
    },
    {
      season: "Monsoon (July-September)",
      foods: ["Corn", "Pears", "Jamun (Indian Blackberry)"],
    },
    {
      season: "Winter (October-February)",
      foods: ["Sitaphal (Custard Apple)", "Mosambi (Sweet Lime)", "Carrots"],
    },
  ];

  const allHormones = [
    ...negativeEmotionsHormones,
    ...positiveEmotionsHormones,
  ];

  const filteredHormones = allHormones.filter(
    (hormone) =>
      hormone.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hormone.foods.some((food) =>
        food.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      hormone.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Comprehensive Hormones and Emotions: An Indian Food Guide (Pune Region)
      </h1>

      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <Search className="text-gray-400" />
          <Input
            type="text"
            placeholder="Search for hormones or foods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <Info className="mr-2" /> Introduction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This guide focuses on foods that can help balance hormones and
            influence emotions positively. The foods listed are easily
            accessible in Pune, Maharashtra, and can be found in local markets,
            grocery stores, and restaurants. Remember, these foods are meant to
            be consumed as part of a balanced diet to support hormone health,
            not avoided.
          </p>
        </CardContent>
      </Card>

      {searchTerm ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-purple-700">
            <Search className="mr-2 hidden sm:inline" /> Search Results
          </h2>
          {filteredHormones.map((hormone, index) => (
            <HormoneCard
              key={index}
              number={index + 1}
              title={hormone.title}
              foods={hormone.foods}
              description={hormone.description}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-red-700">
              <ArrowDownCircle className="mr-2 hidden sm:inline" /> Foods to
              Help Reduce Hormones Associated with Stress and Negative Emotions
            </h2>
            <p className="mb-4 text-gray-600">
              Consuming these foods can help lower levels of stress hormones and
              neurotransmitters associated with negative emotions. They should
              be incorporated into your diet, not avoided.
            </p>
            {negativeEmotionsHormones.map((hormone, index) => (
              <HormoneCard
                key={index}
                number={index + 1}
                title={hormone.title}
                foods={hormone.foods}
                description={hormone.description}
              />
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-green-700">
              <ArrowUpCircle className="mr-2 hidden sm:inline" /> Foods to Help
              Boost Hormones Associated with Happiness and Well-Being
            </h2>
            <p className="mb-4 text-gray-600">
              These foods can help increase levels of hormones and
              neurotransmitters associated with positive emotions and
              well-being. Including them in your diet may contribute to improved
              mood and emotional balance.
            </p>
            {positiveEmotionsHormones.map((hormone, index) => (
              <HormoneCard
                key={index}
                number={index + 1}
                title={hormone.title}
                foods={hormone.foods}
                description={hormone.description}
              />
            ))}
          </div>
        </>
      )}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-orange-800 flex items-center">
            <Utensils className="mr-2 hidden sm:inline" /> Pune-Specific Food
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2 text-orange-700">
            Local Markets and Sources
          </h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Mandai (Central Market)</strong>: Fresh fruits and
              vegetables, locally grown produce
            </li>
            <li>
              <strong>Tulshi Baug</strong>: Spices and dry fruits, traditional
              Maharashtrian snacks
            </li>
            <li>
              <strong>Organic Farmers Markets</strong>: Weekly markets for
              organic produce (check local listings for locations and timings)
            </li>
            <li>
              <strong>Local Supermarket Chains</strong>: D-Mart, Big Bazaar,
              Reliance Fresh
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-orange-700 mt-4 flex items-center">
            <Sun className="mr-2" /> Seasonal Considerations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {seasonalFoods.map((season, index) => (
              <SeasonalFoods
                key={index}
                season={season.season}
                foods={season.foods}
              />
            ))}
          </div>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-orange-700">
            Traditional Pune Dishes for Hormone Balance
          </h3>
          <ol className="list-decimal pl-5">
            <li>
              <strong>Misal Pav</strong>: Rich in proteins (sprouts) and complex
              carbohydrates (pav)
            </li>
            <li>
              <strong>Kanda Poha</strong>: Easy on digestion, rich in iron
              (flattened rice)
            </li>
            <li>
              <strong>Pithla Bhakri</strong>: High protein (besan/gram flour)
              and complex carbs (jowar bhakri)
            </li>
            <li>
              <strong>Thalipeeth</strong>: Multi-grain flour mix, rich in
              various nutrients
            </li>
            <li>
              <strong>Modak</strong> (during Ganesh Chaturthi): Contains jaggery
              (iron-rich) and coconut (healthy fats)
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-blue-800 flex items-center">
            <Info className="mr-2 hidden sm:inline" /> Final Note
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Remember to consult with a healthcare professional or a registered
            dietitian before making significant changes to your diet, especially
            if you have any health conditions or are taking medications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HormonesFoodGuide;
