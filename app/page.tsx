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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HormoneAccordion = ({
  number,
  title,
  subtitle,
  foods,
  description,
}: {
  number: number;
  title: string;
  subtitle: string;
  foods: { name: string; benefit: string }[];
  description: string;
}) => (
  <Accordion type="single" collapsible className="mb-4">
    <AccordionItem value={`item-${number}`}>
      <AccordionTrigger className="text-lg font-semibold text-blue-700">
        <div className="text-left">
          <div>
            {number}. {title}
          </div>
          <p className="text-sm font-normal text-gray-600 mt-1">{subtitle}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <p className="mb-2 text-gray-600">{description}</p>
        <ul className="list-disc pl-5 space-y-2">
          {foods.map((food, index) => (
            <li key={index} className="text-base text-gray-800">
              <strong>{food.name}</strong>: {food.benefit}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
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
      subtitle: "Regulates stress response, metabolism, and immune function",
      foods: [
        {
          name: "Dark chocolate",
          benefit:
            "Rich in antioxidants that can lower cortisol and reduce stress.",
        },
        {
          name: "Ashwagandha tea",
          benefit:
            "An adaptogenic herb that helps reduce cortisol levels and combat stress.",
        },
        {
          name: "Tulsi (Holy Basil) tea",
          benefit:
            "Contains compounds that can help lower cortisol and reduce anxiety.",
        },
        {
          name: "Mosambi (Sweet Lime)",
          benefit:
            "High in vitamin C, which can help reduce cortisol levels during stressful situations.",
        },
        {
          name: "Santras (Oranges)",
          benefit:
            "Also rich in vitamin C, helping to lower cortisol and reduce stress.",
        },
      ],
      description:
        "These foods can help reduce cortisol levels and manage stress.",
    },
    {
      title: "Adrenaline (Epinephrine)",
      subtitle:
        "Triggers 'fight or flight' response, increases heart rate and energy",
      foods: [
        {
          name: "Palak (Spinach)",
          benefit:
            "Rich in magnesium, which helps regulate the nervous system and reduce adrenaline.",
        },
        {
          name: "Methi (Fenugreek leaves)",
          benefit:
            "Contains compounds that can help lower blood sugar and reduce adrenaline spikes.",
        },
        {
          name: "Brown rice",
          benefit:
            "Complex carbohydrates that help stabilize blood sugar and reduce adrenaline surges.",
        },
        {
          name: "Jowar (Sorghum)",
          benefit:
            "High in fiber and nutrients that help regulate blood sugar and reduce stress responses.",
        },
        {
          name: "Bajra (Pearl Millet)",
          benefit:
            "Contains tryptophan, which can help reduce anxiety and lower adrenaline levels.",
        },
        {
          name: "Badam (Almonds)",
          benefit:
            "Rich in magnesium and vitamin E, which help reduce stress and lower adrenaline.",
        },
        {
          name: "Flaxseeds",
          benefit:
            "High in omega-3 fatty acids that can help reduce inflammation and lower stress hormones.",
        },
      ],
      description:
        "These foods can help lower adrenaline levels and promote relaxation.",
    },
    {
      title: "Norepinephrine",
      subtitle: "Increases alertness, focus, and reaction time",
      foods: [
        {
          name: "Flaxseeds",
          benefit:
            "Rich in omega-3 fatty acids that can help regulate neurotransmitter levels, including norepinephrine.",
        },
        {
          name: "Akhrot (Walnuts)",
          benefit:
            "Contains omega-3s and polyphenols that support brain health and neurotransmitter balance.",
        },
        {
          name: "Green tea",
          benefit:
            "Contains L-theanine, which can help modulate norepinephrine levels and promote relaxation.",
        },
        {
          name: "Kela (Bananas)",
          benefit:
            "Rich in potassium and vitamin B6, which support proper nervous system function and neurotransmitter production.",
        },
      ],
      description:
        "These foods can help regulate norepinephrine levels and support emotional balance.",
    },
    {
      title: "Serotonin (Low Levels)",
      subtitle: "Regulates mood, sleep, appetite, and cognitive functions",
      foods: [
        {
          name: "Bhakri (made from Jowar or Bajra)",
          benefit:
            "Complex carbohydrates that can help increase tryptophan availability for serotonin production.",
        },
        {
          name: "Oats",
          benefit:
            "Contains tryptophan and can help stabilize blood sugar, supporting steady serotonin levels.",
        },
        {
          name: "Dahi (Yogurt)",
          benefit:
            "Probiotic-rich food that can enhance gut-brain communication and increase serotonin levels.",
        },
        {
          name: "Idli",
          benefit:
            "Fermented food that can improve gut health, indirectly boosting serotonin production.",
        },
        {
          name: "Dosa",
          benefit:
            "Another fermented food that supports gut health and serotonin production.",
        },
        {
          name: "Akhrot (Walnuts)",
          benefit:
            "Rich in omega-3s, which are crucial for brain health and can support serotonin function.",
        },
        {
          name: "Flaxseeds",
          benefit:
            "High in omega-3 fatty acids and fiber, supporting overall brain health and serotonin production.",
        },
      ],
      description:
        "These foods can help boost serotonin levels and improve mood.",
    },
    {
      title: "Dopamine (Low Levels)",
      subtitle:
        "Controls pleasure and reward centers, motivation, and movement",
      foods: [
        {
          name: "Dal (Lentils)",
          benefit:
            "Rich in tyrosine, an amino acid that is a precursor to dopamine.",
        },
        {
          name: "Chole (Chickpeas)",
          benefit:
            "Another good source of tyrosine and protein, supporting dopamine production.",
        },
        {
          name: "Kela (Bananas)",
          benefit:
            "Contains tyrosine and is rich in vitamin B6, which is necessary for dopamine synthesis.",
        },
        {
          name: "Dahi (Yogurt)",
          benefit:
            "Probiotic-rich food that can enhance gut health, potentially boosting dopamine production.",
        },
        {
          name: "Paneer",
          benefit:
            "Rich in tyrosine and protein, supporting dopamine synthesis.",
        },
      ],
      description:
        "These foods can help increase dopamine levels and enhance pleasure.",
    },
    {
      title: "Estrogen",
      subtitle:
        "Regulates female reproductive system, bone health, and cognitive function",
      foods: [
        {
          name: "Flaxseeds",
          benefit:
            "Contains phytoestrogens that can help balance estrogen levels.",
        },
        {
          name: "Tofu",
          benefit:
            "Rich in isoflavones, a type of phytoestrogen that can help regulate estrogen levels.",
        },
        {
          name: "Soy milk",
          benefit:
            "Another source of isoflavones that can support estrogen balance.",
        },
        {
          name: "Til (Sesame seeds)",
          benefit:
            "Contains lignans, a type of phytoestrogen that can help modulate estrogen levels.",
        },
      ],
      description:
        "These foods can help balance estrogen levels and support hormonal health.",
    },
    {
      title: "Progesterone",
      subtitle:
        "Prepares the uterus for pregnancy and regulates menstrual cycle",
      foods: [
        {
          name: "Kela (Bananas)",
          benefit:
            "Rich in vitamin B6, which is crucial for progesterone production.",
        },
        {
          name: "Shakarkandi (Sweet Potatoes)",
          benefit:
            "Contains vitamin C, which supports the adrenal glands in producing progesterone.",
        },
        {
          name: "Palak (Spinach)",
          benefit:
            "Rich in magnesium, which is essential for progesterone balance.",
        },
        {
          name: "Dark chocolate",
          benefit:
            "Contains magnesium and can help reduce stress, supporting progesterone production.",
        },
        {
          name: "Kaddu ke beej (Pumpkin seeds)",
          benefit:
            "High in zinc, which is crucial for progesterone production and hormonal balance.",
        },
        {
          name: "Chole (Chickpeas)",
          benefit:
            "Rich in B vitamins, supporting overall hormonal balance including progesterone.",
        },
      ],
      description:
        "These foods can help increase progesterone levels and support reproductive health.",
    },
    {
      title: "Testosterone",
      subtitle: "Regulates male characteristics, muscle mass, and bone density",
      foods: [
        {
          name: "Olive oil",
          benefit:
            "Contains healthy fats and antioxidants that can support testosterone production.",
        },
        {
          name: "Avocados",
          benefit:
            "Rich in healthy fats and potassium, supporting overall hormonal balance including testosterone.",
        },
        {
          name: "Chicken",
          benefit:
            "High-quality protein source that can support testosterone levels.",
        },
        {
          name: "Fish (Pomfret, Surmai)",
          benefit:
            "Rich in omega-3 fatty acids and vitamin D, both important for testosterone production.",
        },
        {
          name: "Ande (Eggs)",
          benefit:
            "Contain cholesterol, which is necessary for testosterone production, and vitamin D.",
        },
        {
          name: "Chole (Chickpeas)",
          benefit:
            "Rich in zinc, which is crucial for testosterone production.",
        },
      ],
      description:
        "These foods can help boost testosterone levels and support overall health.",
    },
  ];

  const positiveEmotionsHormones = [
    {
      title: "Serotonin (Boosting)",
      subtitle: "Regulates mood, sleep, appetite, and cognitive functions",
      foods: [
        {
          name: "Brown rice",
          benefit:
            "Complex carbohydrates that help increase tryptophan availability for serotonin production.",
        },
        {
          name: "Whole wheat bread",
          benefit:
            "Contains B vitamins that are crucial for serotonin synthesis.",
        },
        {
          name: "Idli",
          benefit:
            "Fermented food that can improve gut health, indirectly boosting serotonin production.",
        },
        {
          name: "Dahi (Yogurt)",
          benefit:
            "Probiotic-rich food that can enhance gut-brain communication and increase serotonin levels.",
        },
        {
          name: "Badam (Almonds)",
          benefit:
            "Rich in tryptophan, a precursor to serotonin, and magnesium which supports its production.",
        },
        {
          name: "Flaxseeds",
          benefit:
            "High in omega-3 fatty acids that can boost serotonin levels and improve mood.",
        },
      ],
      description:
        "These foods can help boost serotonin levels, improving mood and well-being.",
    },
    {
      title: "Dopamine (Boosting)",
      subtitle:
        "Controls pleasure and reward centers, motivation, and movement",
      foods: [
        {
          name: "Dal (Lentils)",
          benefit:
            "Rich in tyrosine, an amino acid that is a precursor to dopamine.",
        },
        {
          name: "Chicken",
          benefit:
            "High in protein and tyrosine, supporting dopamine production.",
        },
        {
          name: "Kela (Bananas)",
          benefit:
            "Contains natural sugars and tyrosine, providing a quick dopamine boost.",
        },
        {
          name: "Doodh (Milk)",
          benefit:
            "Rich in tyrosine and protein, supporting dopamine synthesis.",
        },
        {
          name: "Paneer",
          benefit:
            "Another good source of tyrosine and protein for dopamine production.",
        },
      ],
      description:
        "These foods can help increase dopamine levels, enhancing pleasure and motivation.",
    },
    {
      title: "Oxytocin",
      subtitle: "Promotes bonding, trust, and social connection",
      foods: [
        {
          name: "Dark chocolate",
          benefit:
            "Can stimulate oxytocin production and provide a sense of pleasure.",
        },
        {
          name: "Aam (Mangoes)",
          benefit:
            "The act of sharing and enjoying this fruit can promote social bonding, indirectly boosting oxytocin.",
        },
        {
          name: "Strawberries (seasonal)",
          benefit:
            "Can be part of romantic or social meals, indirectly promoting oxytocin release.",
        },
        {
          name: "Akhrot (Walnuts)",
          benefit:
            "Rich in omega-3s, supporting overall brain health and potentially oxytocin function.",
        },
        {
          name: "Flaxseeds",
          benefit:
            "High in omega-3s, supporting brain health and potentially oxytocin production.",
        },
      ],
      description:
        "These foods can stimulate oxytocin release, promoting social bonding and emotional well-being.",
    },
    {
      title: "Endorphins",
      subtitle: "Natural pain relievers and mood elevators",
      foods: [
        {
          name: "Green chilies",
          benefit: "Contains capsaicin, which can trigger endorphin release.",
        },
        {
          name: "Red chili powder",
          benefit: "Also contains capsaicin, promoting endorphin production.",
        },
        {
          name: "Dark chocolate",
          benefit:
            "Can help release endorphins and provide a sense of pleasure.",
        },
        {
          name: "Pudina (Mint) tea",
          benefit:
            "The aroma and taste can have a calming effect, potentially boosting endorphins.",
        },
      ],
      description:
        "These foods can help release endorphins, promoting feelings of happiness and relaxation.",
    },
    {
      title: "Endocannabinoids",
      subtitle: "Regulate mood, appetite, pain sensation, and memory",
      foods: [
        {
          name: "Flaxseeds",
          benefit:
            "Rich in omega-3 fatty acids, which are precursors to endocannabinoids.",
        },
        {
          name: "Chia seeds",
          benefit:
            "Another excellent source of omega-3s, supporting endocannabinoid production.",
        },
        {
          name: "Palak (Spinach)",
          benefit:
            "Contains compounds that can interact with the endocannabinoid system, potentially boosting mood.",
        },
        {
          name: "Methi (Fenugreek leaves)",
          benefit:
            "May help regulate the endocannabinoid system, supporting overall well-being.",
        },
        {
          name: "Akhrot (Walnuts)",
          benefit:
            "Rich in omega-3s and antioxidants, supporting endocannabinoid function.",
        },
      ],
      description:
        "These foods can help boost endocannabinoid levels, supporting overall well-being.",
    },
    {
      title: "GABA (Gamma-Aminobutyric Acid)",
      subtitle: "Reduces nervous system activity, promoting calmness",
      foods: [
        {
          name: "Green tea",
          benefit:
            "Contains L-theanine, which can increase GABA activity in the brain.",
        },
        {
          name: "Dahi (Yogurt)",
          benefit:
            "Probiotic-rich food that can enhance GABA production in the gut.",
        },
        {
          name: "Homemade pickles",
          benefit:
            "Fermented foods can support gut health and potentially increase GABA levels.",
        },
        {
          name: "Palak (Spinach)",
          benefit:
            "Contains GABA and can help increase its levels in the body.",
        },
        {
          name: "Dark chocolate",
          benefit:
            "Can help reduce stress and potentially support GABA function.",
        },
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
      hormone.foods.some(
        (food) =>
          food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          food.benefit.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      hormone.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">
        Comprehensive Hormones and Emotions: An Indian Food Guide (Pune Region)
      </h1>

      <div className="mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for hormones or foods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
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
            <HormoneAccordion
              key={index}
              number={index + 1}
              title={hormone.title}
              subtitle={hormone.subtitle}
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
              <HormoneAccordion
                key={index}
                number={index + 1}
                title={hormone.title}
                subtitle={hormone.subtitle}
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
              <HormoneAccordion
                key={index}
                number={index + 1}
                title={hormone.title}
                subtitle={hormone.subtitle}
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
