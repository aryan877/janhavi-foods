"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HormoneCard = ({ title, foods }: { title: string; foods: string[] }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-lg font-semibold text-blue-700">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {foods.map((food, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-blue-100 text-blue-800"
          >
            {food}
          </Badge>
        ))}
      </div>
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
  const negativeEmotionsHormones = [
    {
      title: "1. Cortisol (Stress Hormone)",
      foods: [
        "Dark chocolate",
        "Ashwagandha tea",
        "Tulsi (Holy Basil) tea",
        "Mosambi (Sweet Lime)",
        "Santras (Oranges)",
      ],
    },
    {
      title: "2. Adrenaline (Epinephrine)",
      foods: [
        "Palak (Spinach)",
        "Methi (Fenugreek leaves)",
        "Brown rice",
        "Jowar (Sorghum)",
        "Bajra (Pearl Millet)",
        "Badam (Almonds)",
        "Flaxseeds",
      ],
    },
    {
      title: "3. Norepinephrine",
      foods: ["Flaxseeds", "Akhrot (Walnuts)", "Green tea", "Kela (Bananas)"],
    },
    {
      title: "4. Serotonin (Low Levels)",
      foods: [
        "Bhakri (made from Jowar or Bajra)",
        "Oats",
        "Dahi (Yogurt)",
        "Idli",
        "Dosa",
        "Akhrot (Walnuts)",
        "Flaxseeds",
      ],
    },
    {
      title: "5. Dopamine (Low Levels)",
      foods: [
        "Dal (Lentils)",
        "Chole (Chickpeas)",
        "Kela (Bananas)",
        "Dahi (Yogurt)",
        "Paneer",
      ],
    },
    {
      title: "6. Estrogen",
      foods: ["Flaxseeds", "Tofu", "Soy milk", "Til (Sesame seeds)"],
    },
    {
      title: "7. Progesterone",
      foods: [
        "Kela (Bananas)",
        "Shakarkandi (Sweet Potatoes)",
        "Palak (Spinach)",
        "Dark chocolate",
        "Kaddu ke beej (Pumpkin seeds)",
        "Chole (Chickpeas)",
      ],
    },
    {
      title: "8. Testosterone",
      foods: [
        "Olive oil",
        "Avocados",
        "Chicken",
        "Fish (Pomfret, Surmai)",
        "Ande (Eggs)",
        "Chole (Chickpeas)",
      ],
    },
  ];

  const positiveEmotionsHormones = [
    {
      title: "1. Serotonin (Boosting)",
      foods: [
        "Brown rice",
        "Whole wheat bread",
        "Idli",
        "Dahi (Yogurt)",
        "Badam (Almonds)",
        "Flaxseeds",
      ],
    },
    {
      title: "2. Dopamine (Boosting)",
      foods: [
        "Dal (Lentils)",
        "Chicken",
        "Kela (Bananas)",
        "Doodh (Milk)",
        "Paneer",
      ],
    },
    {
      title: "3. Oxytocin",
      foods: [
        "Dark chocolate",
        "Aam (Mangoes)",
        "Strawberries (seasonal)",
        "Akhrot (Walnuts)",
        "Flaxseeds",
      ],
    },
    {
      title: "4. Endorphins",
      foods: [
        "Green chilies",
        "Red chili powder",
        "Dark chocolate",
        "Pudina (Mint) tea",
      ],
    },
    {
      title: "5. Endocannabinoids",
      foods: [
        "Flaxseeds",
        "Chia seeds",
        "Palak (Spinach)",
        "Methi (Fenugreek leaves)",
        "Akhrot (Walnuts)",
      ],
    },
    {
      title: "6. GABA (Gamma-Aminobutyric Acid)",
      foods: [
        "Green tea",
        "Dahi (Yogurt)",
        "Homemade pickles",
        "Palak (Spinach)",
        "Dark chocolate",
      ],
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Comprehensive Hormones and Emotions: An Indian Food Guide (Pune Region)
      </h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This comprehensive guide is tailored for residents of Pune,
            Maharashtra, focusing on easily accessible local foods that can help
            balance hormones and influence emotions. The foods listed are
            commonly found in local markets, grocery stores, and restaurants in
            the Pune area.
          </p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="negative-emotions">
          <AccordionTrigger className="text-xl font-semibold">
            Hormones and Neurotransmitters Associated with Sadness and Negative
            Emotions
          </AccordionTrigger>
          <AccordionContent>
            {negativeEmotionsHormones.map((hormone, index) => (
              <HormoneCard
                key={index}
                title={hormone.title}
                foods={hormone.foods}
              />
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="positive-emotions">
          <AccordionTrigger className="text-xl font-semibold">
            Hormones and Neurotransmitters Associated with Happiness and
            Well-Being
          </AccordionTrigger>
          <AccordionContent>
            {positiveEmotionsHormones.map((hormone, index) => (
              <HormoneCard
                key={index}
                title={hormone.title}
                foods={hormone.foods}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="mb-6 bg-orange-50">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-orange-800">
            Pune-Specific Food Recommendations
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

          <h3 className="text-lg font-semibold mb-2 text-orange-700">
            Seasonal Considerations
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

      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-blue-800">
            Final Note
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
