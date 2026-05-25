import type { Recipe } from '../types/recipe'

export const dossierRecipeCatalog: Recipe[] = [
  {
    "id": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Almôndegas de Carne",
    "slug": "almondegas-carne",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "carne",
    "status": "published",
    "imagePath": "/recipe-images/almondegas-carne.png",
    "imageUrl": "/recipe-images/almondegas-carne.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 968,
    "cookingMethod": "Forno ou frigideira antiaderente",
    "correctionFactor": null,
    "cookingFactor": 0.968,
    "baseYieldNote": "1kg de proteína principal rende cerca de 968g de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 3,
    "timeLevel": 3,
    "workLevel": 2,
    "practicalityLevel": 3,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 199,
      "proteinGPer100g": 22.9,
      "carbsGPer100g": 4.6,
      "fatGPer100g": 9.8,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 100,
    "tags": [
      {
        "id": "841299b8-b17e-4558-b522-b45663b91892",
        "name": "Carne",
        "slug": "carne"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "bec2b513-ae09-4e4e-9190-a60db6225b78",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "ingredientId": "2396425c-508b-435a-b089-d08d093095af",
        "ingredient": {
          "id": "2396425c-508b-435a-b089-d08d093095af",
          "name": "Patinho moído",
          "slug": "patinho-moido",
          "displayName": "Patinho moído",
          "aliases": [],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 161,
            "proteinGPer100g": 20.7,
            "carbsGPer100g": 0,
            "fatGPer100g": 8.6,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "f2ba47de-770a-43ca-bf9f-480305b6e79b",
              "ingredientId": "2396425c-508b-435a-b089-d08d093095af",
              "measureName": "1 colher de servir cru",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "1848e746-b14c-4f86-849e-b1a95300aa79",
              "ingredientId": "2396425c-508b-435a-b089-d08d093095af",
              "measureName": "1 xícara cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Patinho moído",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Patinho moído",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "20f720a9-569b-4642-a53a-fe0123112559",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "ingredientId": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
        "ingredient": {
          "id": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
          "name": "Ovo inteiro",
          "slug": "ovo-inteiro",
          "displayName": "Ovo inteiro",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 143,
            "proteinGPer100g": 12.6,
            "carbsGPer100g": 0.7,
            "fatGPer100g": 9.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20001,
          "householdMeasures": [
            {
              "id": "45917a32-c6da-4c21-9334-8e8beb31e450",
              "ingredientId": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 45,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2d6910e5-ed8c-4b40-8532-ddb249b75196",
              "ingredientId": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
              "measureName": "1 unidade média",
              "gramsEquivalent": 50,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "48dcd0bd-31a9-4705-9ffb-a01adfd82b9c",
              "ingredientId": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 60,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Ovo inteiro",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 55,
        "quantidade": 55,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Ovo inteiro",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "a5e965a8-466a-43fe-a104-4b5a8fa0605c",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "ingredientId": "3fe54b1b-5833-4420-9304-41aa229558e5",
        "ingredient": {
          "id": "3fe54b1b-5833-4420-9304-41aa229558e5",
          "name": "Farelo de aveia",
          "slug": "farelo-de-aveia",
          "displayName": "Farelo de aveia",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 385,
            "proteinGPer100g": 12,
            "carbsGPer100g": 67,
            "fatGPer100g": 8,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20002,
          "householdMeasures": [
            {
              "id": "d9ba4a38-98a6-4932-b176-e1df00029e38",
              "ingredientId": "3fe54b1b-5833-4420-9304-41aa229558e5",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "75f1e414-5804-4ed0-a8a0-ed1db0a1d45b",
              "ingredientId": "3fe54b1b-5833-4420-9304-41aa229558e5",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "211dd4aa-1ad1-45b5-a0bb-2183f45e6622",
              "ingredientId": "3fe54b1b-5833-4420-9304-41aa229558e5",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 40,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Farelo de aveia",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 45,
        "quantidade": 45,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Farelo de aveia",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "2d98092b-146a-4346-b6ec-a563150816e6",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 80,
        "quantidade": 80,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "f15af3c9-66f6-48aa-ba96-d74c64a47be2",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e3346696-554c-48c4-9209-77014dd40041",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
        "ingredient": {
          "id": "fed96ab6-56f4-41c8-adfe-2e362084000a",
          "name": "Salsinha",
          "slug": "salsinha",
          "displayName": "Salsinha",
          "aliases": [
            "Salsinha fresca"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "45624da8-d33c-40be-acd1-2c262340569c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 4,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "b740a8f1-5757-46d2-bbc1-11251a6be29c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1/2 xícara picada",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Salsinha",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Salsinha",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "b0d47374-3904-4c93-8fa2-99bea68d2a7b",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta-do-reino, noz-moscada",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta-do-reino, noz-moscada",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "29d51de3-ca1f-4425-814f-6d062350a600",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "stepNumber": 1,
        "instruction": "Processe a cebola e o alho até ficarem bem picados."
      },
      {
        "id": "da132c18-7934-43e4-9384-ba464f691de3",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "stepNumber": 2,
        "instruction": "Em um bowl, misture o patinho moído, ovo, farelo de aveia, cebola, alho, salsinha, sal, pimenta e noz-moscada. Incorpore bem com as mãos."
      },
      {
        "id": "3052a2cf-7385-4011-a818-d263896ab17b",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "stepNumber": 3,
        "instruction": "Modele as almôndegas (aprox. 40–50g cada) e disponha em assadeira untada levemente com azeite."
      },
      {
        "id": "c3c4efbc-21f9-49e9-8ed4-e82dedb5e0f9",
        "recipeId": "46f2e548-366d-4a63-9f17-f4d0888a70ce",
        "stepNumber": 4,
        "instruction": "Leve ao forno preaquecido a 200°C por 20–25 minutos, virando na metade do tempo, até dourar. Alternativa: doure em frigideira antiaderente com fio de azeite, em fogo médio-alto."
      }
    ]
  },
  {
    "id": "ec17d5f7-98d5-43cd-8984-710246aeee15",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Almôndegas de Frango",
    "slug": "almondegas-frango",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "frango",
    "status": "published",
    "imagePath": "/recipe-images/almondegas-frango.png",
    "imageUrl": "/recipe-images/almondegas-frango.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 968,
    "cookingMethod": "Forno ou frigideira antiaderente",
    "correctionFactor": null,
    "cookingFactor": 0.968,
    "baseYieldNote": "1kg de proteína principal rende cerca de 968g de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 3,
    "timeLevel": 3,
    "workLevel": 2,
    "practicalityLevel": 3,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 146,
      "proteinGPer100g": 25.3,
      "carbsGPer100g": 4.6,
      "fatGPer100g": 3,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 101,
    "tags": [
      {
        "id": "7af28f4b-769c-4f79-bb4b-eab488ecc472",
        "name": "Frango",
        "slug": "frango"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "2d057194-53c0-4ecb-b782-60189ad1d6d3",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
        "ingredient": {
          "id": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
          "name": "Peito de frango",
          "slug": "peito-de-frango",
          "displayName": "Peito de frango",
          "aliases": [
            "Peito de frango moído"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 110,
            "proteinGPer100g": 23,
            "carbsGPer100g": 0,
            "fatGPer100g": 2,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "c5ab4132-5727-43f7-b591-7096567ecd30",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "03ecd2ad-1710-40ad-90f2-bb9de3f87507",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "075285d8-0f83-498e-8605-7a3650f46cd6",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Peito de frango",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Peito de frango",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "13d36ddd-5364-4b69-93a1-9cb420b4a54c",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "ingredientId": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
        "ingredient": {
          "id": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
          "name": "Ovo inteiro",
          "slug": "ovo-inteiro",
          "displayName": "Ovo inteiro",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 143,
            "proteinGPer100g": 12.6,
            "carbsGPer100g": 0.7,
            "fatGPer100g": 9.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20001,
          "householdMeasures": [
            {
              "id": "45917a32-c6da-4c21-9334-8e8beb31e450",
              "ingredientId": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 45,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2d6910e5-ed8c-4b40-8532-ddb249b75196",
              "ingredientId": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
              "measureName": "1 unidade média",
              "gramsEquivalent": 50,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "48dcd0bd-31a9-4705-9ffb-a01adfd82b9c",
              "ingredientId": "98c9ed5c-3c76-4689-aba5-7d3f6271ee42",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 60,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Ovo inteiro",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 55,
        "quantidade": 55,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Ovo inteiro",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "9caa04ee-dc35-4bea-a59e-8f7c7fcf7131",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "ingredientId": "3fe54b1b-5833-4420-9304-41aa229558e5",
        "ingredient": {
          "id": "3fe54b1b-5833-4420-9304-41aa229558e5",
          "name": "Farelo de aveia",
          "slug": "farelo-de-aveia",
          "displayName": "Farelo de aveia",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 385,
            "proteinGPer100g": 12,
            "carbsGPer100g": 67,
            "fatGPer100g": 8,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20002,
          "householdMeasures": [
            {
              "id": "d9ba4a38-98a6-4932-b176-e1df00029e38",
              "ingredientId": "3fe54b1b-5833-4420-9304-41aa229558e5",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "75f1e414-5804-4ed0-a8a0-ed1db0a1d45b",
              "ingredientId": "3fe54b1b-5833-4420-9304-41aa229558e5",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "211dd4aa-1ad1-45b5-a0bb-2183f45e6622",
              "ingredientId": "3fe54b1b-5833-4420-9304-41aa229558e5",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 40,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Farelo de aveia",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 45,
        "quantidade": 45,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Farelo de aveia",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "8d878fc8-8154-4a59-b729-f59ddd1f59b7",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 80,
        "quantidade": 80,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "b66d78d9-a0cc-41a8-8680-1e7124680c36",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "dadbe265-2781-425a-9588-bab4a4343f7d",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
        "ingredient": {
          "id": "fed96ab6-56f4-41c8-adfe-2e362084000a",
          "name": "Salsinha",
          "slug": "salsinha",
          "displayName": "Salsinha",
          "aliases": [
            "Salsinha fresca"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "45624da8-d33c-40be-acd1-2c262340569c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 4,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "b740a8f1-5757-46d2-bbc1-11251a6be29c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1/2 xícara picada",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Salsinha",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Salsinha",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "68aa4bb3-b673-49f8-9d69-339f3e123592",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta-do-reino, noz-moscada",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta-do-reino, noz-moscada",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "41b71aa2-4da6-440a-b45d-32fd84181df9",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "stepNumber": 1,
        "instruction": "Processe o peito de frango em pedaços no processador até obter textura de carne moída. Não bata demais para não virar pasta."
      },
      {
        "id": "cf0b8bae-994c-41f8-9548-1a31ccef9b3d",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "stepNumber": 2,
        "instruction": "Processe a cebola e o alho separadamente."
      },
      {
        "id": "a2253c68-56d6-44d8-8025-03fee349bb8d",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "stepNumber": 3,
        "instruction": "Em um bowl, misture todos os ingredientes e incorpore bem com as mãos. A massa de frango é mais úmida — o farelo de aveia é fundamental para dar liga."
      },
      {
        "id": "a1bb5718-8c31-4961-99c7-049c96e5cdf2",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "stepNumber": 4,
        "instruction": "Modele as almôndegas (aprox. 40–50g cada) com as mãos levemente umedecidas."
      },
      {
        "id": "6bb7d72d-1288-4d9a-b2a6-6068595ac534",
        "recipeId": "ec17d5f7-98d5-43cd-8984-710246aeee15",
        "stepNumber": 5,
        "instruction": "Leve ao forno preaquecido a 200°C por 20–22 minutos, virando na metade. Ficam prontas quando douradas e firmes ao toque."
      }
    ]
  },
  {
    "id": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Carne de Panela",
    "slug": "carne-panela",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "carne",
    "status": "published",
    "imagePath": "/recipe-images/carne-panela.png",
    "imageUrl": "/recipe-images/carne-panela.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1186,
    "cookingMethod": "Panela de pressão",
    "correctionFactor": null,
    "cookingFactor": 1.186,
    "baseYieldNote": "1kg de proteína principal rende cerca de 1,2kg de preparo pronto.",
    "prepTimeMinutes": 50,
    "costLevel": 3,
    "timeLevel": 3,
    "workLevel": 3,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 142,
      "proteinGPer100g": 18.6,
      "carbsGPer100g": 2.5,
      "fatGPer100g": 6.4,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 102,
    "tags": [
      {
        "id": "841299b8-b17e-4558-b522-b45663b91892",
        "name": "Carne",
        "slug": "carne"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "845e0d90-1fb2-454b-9144-c6d8a4b2653e",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "ingredientId": "080f7052-b190-4cc4-868b-9e773f7983d6",
        "ingredient": {
          "id": "080f7052-b190-4cc4-868b-9e773f7983d6",
          "name": "Coxão mole",
          "slug": "coxao-mole",
          "displayName": "Coxão mole",
          "aliases": [
            "Coxão mole (ou patinho)"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "a78316eb-b9f2-4b5d-b3b2-1f44d80bf96a",
              "ingredientId": "080f7052-b190-4cc4-868b-9e773f7983d6",
              "measureName": "1 bife pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "c6aaa47f-200c-4669-b5b4-5b703c5070a7",
              "ingredientId": "080f7052-b190-4cc4-868b-9e773f7983d6",
              "measureName": "1 bife médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "6ea6ebb4-f966-4a0f-be2b-eb67ab38c3f4",
              "ingredientId": "080f7052-b190-4cc4-868b-9e773f7983d6",
              "measureName": "1 bife grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Coxão mole",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Coxão mole",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "ea30b6e0-cf22-44f6-ae40-9eb19039f94c",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 150,
        "quantidade": 150,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "713b4216-6974-4503-90a9-f34cbfd72857",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "c33a88e9-34af-4a68-acfa-8d1b3c6dbfd0",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "ingredientId": "40000000-0000-0000-0000-000000000007",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000007",
          "name": "Tomate",
          "slug": "tomate",
          "displayName": "Tomate",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 18,
            "proteinGPer100g": 0.9,
            "carbsGPer100g": 3.9,
            "fatGPer100g": 0.2,
            "fiberGPer100g": 1.2,
            "sodiumMgPer100g": 5,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.05,
            "ediblePortionPercent": 95,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "c492e01a-de6b-47fe-b751-19e4ccea7ae6",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "0ece64ae-ca0c-44c3-aa76-d502d5793e83",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade média",
              "gramsEquivalent": 120,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "e13dd6c9-3810-4423-9f42-1772bf468548",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "eb625a7d-c96f-4d15-809c-752886da1123",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 colher de sopa picado",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Tomate",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 150,
        "quantidade": 150,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Tomate",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "d0e0e3e8-5504-4c74-9be6-bfc57b7c2d4c",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
        "ingredient": {
          "id": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
          "name": "Extrato de tomate",
          "slug": "extrato-de-tomate",
          "displayName": "Extrato de tomate",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 32,
            "proteinGPer100g": 1.5,
            "carbsGPer100g": 6,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20004,
          "householdMeasures": [
            {
              "id": "bec4147f-c7fa-47b8-a296-98353fd743da",
              "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "91fce8e1-f95d-4bfb-848f-976aafc8a137",
              "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
              "measureName": "1 sachê pequeno",
              "gramsEquivalent": 130,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Extrato de tomate",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Extrato de tomate",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e5689964-e52c-4534-8f6f-ee0c2afaaa77",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "ingredientId": "00f2e090-919e-4502-b964-bcd056a63034",
        "ingredient": {
          "id": "00f2e090-919e-4502-b964-bcd056a63034",
          "name": "Shoyu",
          "slug": "shoyu",
          "displayName": "Shoyu",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 60,
            "proteinGPer100g": 6,
            "carbsGPer100g": 5.2,
            "fatGPer100g": 0,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20005,
          "householdMeasures": [
            {
              "id": "766038a6-4d81-4d74-8e39-0dc818028eaa",
              "ingredientId": "00f2e090-919e-4502-b964-bcd056a63034",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "6f492c67-814d-4792-b148-5fb61d50dd6b",
              "ingredientId": "00f2e090-919e-4502-b964-bcd056a63034",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Shoyu",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Shoyu",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "62706d23-fe11-477b-9d60-2209f979cc2c",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "9b196781-942b-4f09-b669-5c64e7c53e5d",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta-do-reino, louro",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta-do-reino, louro",
        "notes": null,
        "sortOrder": 7,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "ffcf4f77-0e57-4002-b968-174994af8394",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "stepNumber": 1,
        "instruction": "Tempere a carne com sal, pimenta e shoyu com antecedência (mínimo 30 minutos)."
      },
      {
        "id": "13bc12ac-838b-4e73-ac16-30d2c669491b",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite na panela de pressão em fogo alto. Sele a carne por todos os lados até criar uma crosta dourada. Reserve."
      },
      {
        "id": "1bd23552-130a-40db-811c-3f189447a29f",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "stepNumber": 3,
        "instruction": "Na mesma panela, refogue a cebola e o alho até amolecer. Acrescente o tomate picado e o extrato de tomate. Misture bem."
      },
      {
        "id": "8ef02e13-0c58-44c2-9065-7a2c8bf26288",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "stepNumber": 4,
        "instruction": "Volte a carne para a panela. Adicione água suficiente para cobrir pela metade (~200ml). Tampe e cozinhe em pressão por 35–40 minutos."
      },
      {
        "id": "037f66d8-e9c2-461a-9a2a-3175bb59985f",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "stepNumber": 5,
        "instruction": "Libere a pressão, verifique o ponto da carne (deve desmanchar com o garfo) e ajuste o sal. Se o molho estiver ralo, reduza em fogo aberto até engrossar."
      },
      {
        "id": "4c477d2f-867b-441c-ae4d-98f104f33f28",
        "recipeId": "dcf76a43-7bc8-451d-876c-87a8afde0dbe",
        "stepNumber": 6,
        "instruction": "Finalize com louro e sirva."
      }
    ]
  },
  {
    "id": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Filé Mignon Suíno Acebolado",
    "slug": "file-mignon-suino",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "suino",
    "status": "published",
    "imagePath": "/recipe-images/file-mignon-suino.png",
    "imageUrl": "/recipe-images/file-mignon-suino.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1010,
    "cookingMethod": "Frigideira",
    "correctionFactor": null,
    "cookingFactor": 1.01,
    "baseYieldNote": "1kg de proteína principal rende cerca de 1kg de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 3,
    "timeLevel": 2,
    "workLevel": 2,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 151.7,
      "proteinGPer100g": 22.2,
      "carbsGPer100g": 3.3,
      "fatGPer100g": 5.2,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 103,
    "tags": [
      {
        "id": "7f199b66-349b-4c20-952e-c1d3ae2a18ca",
        "name": "Suíno",
        "slug": "suino"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "3e135782-8ecd-4e0b-9644-a47a9f5788cc",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "ingredientId": "717a92df-2b44-4da6-b6f9-43b04bdb3695",
        "ingredient": {
          "id": "717a92df-2b44-4da6-b6f9-43b04bdb3695",
          "name": "Filé mignon suíno",
          "slug": "file-mignon-suino",
          "displayName": "Filé mignon suíno",
          "aliases": [],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 125,
            "proteinGPer100g": 22,
            "carbsGPer100g": 0,
            "fatGPer100g": 3.7,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "4efea504-87ce-4d4b-a5eb-1cfe5f9e728e",
              "ingredientId": "717a92df-2b44-4da6-b6f9-43b04bdb3695",
              "measureName": "1 medalhão pequeno cru",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "44c0e95b-aa35-4e81-8fb5-b795ed691f39",
              "ingredientId": "717a92df-2b44-4da6-b6f9-43b04bdb3695",
              "measureName": "1 medalhão médio cru",
              "gramsEquivalent": 120,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "5b9dd175-aa9f-4d96-8f1e-9afd7635e63d",
              "ingredientId": "717a92df-2b44-4da6-b6f9-43b04bdb3695",
              "measureName": "1 bife médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Filé mignon suíno",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Filé mignon suíno",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "2f3accbd-45eb-4541-a309-819348841f43",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 300,
        "quantidade": 300,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "bb7fe371-1479-46e6-8178-411b32d25196",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "386f65bc-6004-41eb-8349-239e8c392cc8",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "f40036ee-8f18-425a-8fc3-96eb654521c0",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta-do-reino, alecrim (opcional)",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta-do-reino, alecrim (opcional)",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "8c66cb12-b194-4623-9cb0-5d436ad123ea",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "stepNumber": 1,
        "instruction": "Corte o filé mignon suíno em medalhões de ~2cm ou em bifes. Tempere com sal, pimenta e alho amassado."
      },
      {
        "id": "2610e06e-ad83-494d-8273-55f1411effd3",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite em frigideira grande em fogo alto. Sele os medalhões por 3–4 minutos de cada lado até dourar. Reserve em prato aquecido."
      },
      {
        "id": "693acf0f-f83c-4782-bba8-fbffaf274211",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "stepNumber": 3,
        "instruction": "Na mesma frigideira, reduza o fogo para médio. Adicione a cebola fatiada em rodelas e refogue mexendo até caramelizar (~10 minutos). Acrescente o alho e cozinhe por mais 2 minutos."
      },
      {
        "id": "aca43084-064d-40b5-b9c8-78289c219685",
        "recipeId": "8c6c07e6-a0ef-47f7-be3d-7819b3eff5ee",
        "stepNumber": 4,
        "instruction": "Volte a carne para a frigideira, incorpore ao molho de cebola e finalize com alecrim se quiser. Sirva imediatamente."
      }
    ]
  },
  {
    "id": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Frango com Creme de Milho",
    "slug": "frango-creme-milho",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "frango",
    "status": "published",
    "imagePath": "/recipe-images/frango-creme-milho.png",
    "imageUrl": "/recipe-images/frango-creme-milho.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1300,
    "cookingMethod": "Panela de pressão + finalização em fogo aberto",
    "correctionFactor": null,
    "cookingFactor": 1.3,
    "baseYieldNote": "1kg de proteína principal rende cerca de 1,3kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 3,
    "timeLevel": 3,
    "workLevel": 2,
    "practicalityLevel": 4,
    "versatilityLevel": 1,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 121.8,
      "proteinGPer100g": 18.6,
      "carbsGPer100g": 5,
      "fatGPer100g": 3.2,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 104,
    "tags": [
      {
        "id": "7af28f4b-769c-4f79-bb4b-eab488ecc472",
        "name": "Frango",
        "slug": "frango"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "04a30e28-72c7-4eee-a6e9-551331f91589",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
        "ingredient": {
          "id": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
          "name": "Peito de frango",
          "slug": "peito-de-frango",
          "displayName": "Peito de frango",
          "aliases": [
            "Peito de frango moído"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 110,
            "proteinGPer100g": 23,
            "carbsGPer100g": 0,
            "fatGPer100g": 2,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "c5ab4132-5727-43f7-b591-7096567ecd30",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "03ecd2ad-1710-40ad-90f2-bb9de3f87507",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "075285d8-0f83-498e-8605-7a3650f46cd6",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Peito de frango",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Peito de frango",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "fb5ec9d2-aa10-448d-9d54-e3ce2f446e08",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
        "ingredient": {
          "id": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
          "name": "Creme de leite light",
          "slug": "creme-de-leite-light",
          "displayName": "Creme de leite light",
          "aliases": [
            "Creme de leite light (Nestlé Levíssimo)"
          ],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20001,
          "householdMeasures": [
            {
              "id": "cff199d7-ae4a-48be-bf11-2a004b78d29f",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "3445dbdf-33bf-4194-884b-014400bfddc2",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1/2 caixinha",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "6f0936ad-f1b2-4258-acc7-81b7165635f9",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1 caixinha",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Creme de leite light",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 200,
        "quantidade": 200,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Creme de leite light",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e06c775d-ae03-406f-8672-89422874349d",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
        "ingredient": {
          "id": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
          "name": "Milho verde",
          "slug": "milho-verde",
          "displayName": "Milho verde",
          "aliases": [
            "Milho verde (lata, escorrido)"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "17421647-b5a6-43bf-b922-92c5a4acd69f",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "39fcec64-2a77-4a22-b0d6-38fca6d3caa2",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "e5d84f61-2186-4a1a-a814-5c946d9cb19e",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1 espiga média debulhada",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Milho verde",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 200,
        "quantidade": 200,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Milho verde",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "0167ac00-0bc0-47f3-8cbd-7f48bc3ec679",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "47e90ada-a0c8-4247-ac61-73762613a615",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "cd20d0ec-7af5-407a-b9e9-efe063e7acc1",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta, colorau, louro",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta, colorau, louro",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "0cf2f4be-dc96-4e5c-9e69-f38da6efb41c",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "stepNumber": 1,
        "instruction": "Tempere o peito de frango com sal, pimenta, colorau e louro. Leve à panela de pressão com a cebola e o alho e água suficiente para cobrir (~400ml). Cozinhe por 20–25 minutos após pegar pressão."
      },
      {
        "id": "062f177b-8a23-4d5a-b808-cf4e1e5bb9e5",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "stepNumber": 2,
        "instruction": "Retire o frango e desfie. Reserve o caldo do cozimento."
      },
      {
        "id": "bad7044f-5d6b-4728-9a5e-0fc5fe0c3239",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "stepNumber": 3,
        "instruction": "Em uma panela aberta, coloque o frango desfiado e adicione ~250ml do caldo reservado. Leve ao fogo médio."
      },
      {
        "id": "72c33619-7d59-4a90-a0d2-bb1fe5086700",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "stepNumber": 4,
        "instruction": "Acrescente o milho verde escorrido. Mexa e aqueça por 3 minutos."
      },
      {
        "id": "d41d8bd1-947d-4dee-9972-c94d29443cb4",
        "recipeId": "f1b19c49-9a1e-411b-8f50-5ef549c8a98a",
        "stepNumber": 5,
        "instruction": "Adicione o creme de leite, mexa bem e deixe apurar em fogo baixo por 5–7 minutos até o molho encorpar levemente. Ajuste o sal e sirva."
      }
    ]
  },
  {
    "id": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Frango Desfiado",
    "slug": "frango-desfiado",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "frango",
    "status": "published",
    "imagePath": "/recipe-images/frango-desfiado.png",
    "imageUrl": "/recipe-images/frango-desfiado.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 880,
    "cookingMethod": "Panela de pressão",
    "correctionFactor": null,
    "cookingFactor": 0.88,
    "baseYieldNote": "1kg de proteína principal rende cerca de 880g de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 3,
    "timeLevel": 3,
    "workLevel": 2,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 143,
      "proteinGPer100g": 26.4,
      "carbsGPer100g": 1.8,
      "fatGPer100g": 3.4,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 105,
    "tags": [
      {
        "id": "7af28f4b-769c-4f79-bb4b-eab488ecc472",
        "name": "Frango",
        "slug": "frango"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "0f0b93c9-18e6-47f0-8d07-3354c45743b8",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
        "ingredient": {
          "id": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
          "name": "Peito de frango",
          "slug": "peito-de-frango",
          "displayName": "Peito de frango",
          "aliases": [
            "Peito de frango moído"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 110,
            "proteinGPer100g": 23,
            "carbsGPer100g": 0,
            "fatGPer100g": 2,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "c5ab4132-5727-43f7-b591-7096567ecd30",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "03ecd2ad-1710-40ad-90f2-bb9de3f87507",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "075285d8-0f83-498e-8605-7a3650f46cd6",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Peito de frango",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Peito de frango",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "812430d1-f55a-4daf-ac0a-d05aa8253e34",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "4f5e1137-ed63-4d73-bd98-b19667758d6b",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "39f32267-90f1-403c-9529-bf70584b21d1",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "39262982-7153-4ba6-8bde-8032ebd03dab",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta, colorau, louro, cominho",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta, colorau, louro, cominho",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "30a6ba76-341f-475b-85fc-fad79accaacb",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "stepNumber": 1,
        "instruction": "Tempere o frango generosamente: sal, pimenta, colorau, cominho, louro e alho amassado. Deixe marinar pelo menos 30 minutos (idealmente de um dia para o outro)."
      },
      {
        "id": "e94663f4-4134-4f6f-81b8-c8723cc22ca7",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "stepNumber": 2,
        "instruction": "Coloque o frango na panela de pressão com a cebola em rodelas e ~200ml de água. Leve à pressão e cozinhe por 25 minutos."
      },
      {
        "id": "73449de9-3342-4145-992f-75c8ddcafc83",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "stepNumber": 3,
        "instruction": "Libere a pressão e retire o frango. Reserve um pouco do caldo."
      },
      {
        "id": "a997431c-808d-4dbd-8fc5-5d6c4497db47",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "stepNumber": 4,
        "instruction": "Desfie o frango com dois garfos enquanto ainda quente — fica muito mais fácil e o resultado é mais uniforme."
      },
      {
        "id": "7a36510a-1d39-4c0c-80e5-04651da86964",
        "recipeId": "2c68138f-75a5-46d6-8e04-ca28f7c5da5b",
        "stepNumber": 5,
        "instruction": "Refogue rapidamente o frango desfiado em fio de azeite com alho em fogo alto por 2–3 minutos para secar levemente e agregar sabor. Ajuste o sal."
      }
    ]
  },
  {
    "id": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Frango Moído",
    "slug": "frango-moido",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "frango",
    "status": "published",
    "imagePath": "/recipe-images/frango-moido.png",
    "imageUrl": "/recipe-images/frango-moido.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 930,
    "cookingMethod": "Frigideira",
    "correctionFactor": null,
    "cookingFactor": 0.93,
    "baseYieldNote": "1kg de proteína principal rende cerca de 930g de preparo pronto.",
    "prepTimeMinutes": 20,
    "costLevel": 3,
    "timeLevel": 2,
    "workLevel": 3,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 137.6,
      "proteinGPer100g": 25.1,
      "carbsGPer100g": 2.2,
      "fatGPer100g": 3.3,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 106,
    "tags": [
      {
        "id": "7af28f4b-769c-4f79-bb4b-eab488ecc472",
        "name": "Frango",
        "slug": "frango"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "1fce1561-9850-4a5f-80ab-ba399f715198",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
        "ingredient": {
          "id": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
          "name": "Peito de frango",
          "slug": "peito-de-frango",
          "displayName": "Peito de frango",
          "aliases": [
            "Peito de frango moído"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 110,
            "proteinGPer100g": 23,
            "carbsGPer100g": 0,
            "fatGPer100g": 2,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "c5ab4132-5727-43f7-b591-7096567ecd30",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "03ecd2ad-1710-40ad-90f2-bb9de3f87507",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "075285d8-0f83-498e-8605-7a3650f46cd6",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Peito de frango",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Peito de frango",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "0c5dc515-4195-431b-9d6a-3fd9b48d68d9",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "4d8b888f-dfcc-4cc5-869d-9504cf2b0096",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e78b0201-1320-4369-b9b6-9a9b93fb9a05",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "ingredientId": "40000000-0000-0000-0000-000000000007",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000007",
          "name": "Tomate",
          "slug": "tomate",
          "displayName": "Tomate",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 18,
            "proteinGPer100g": 0.9,
            "carbsGPer100g": 3.9,
            "fatGPer100g": 0.2,
            "fiberGPer100g": 1.2,
            "sodiumMgPer100g": 5,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.05,
            "ediblePortionPercent": 95,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "c492e01a-de6b-47fe-b751-19e4ccea7ae6",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "0ece64ae-ca0c-44c3-aa76-d502d5793e83",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade média",
              "gramsEquivalent": 120,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "e13dd6c9-3810-4423-9f42-1772bf468548",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "eb625a7d-c96f-4d15-809c-752886da1123",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 colher de sopa picado",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Tomate",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Tomate",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "40d8857c-7b68-4b34-aaee-903f8d85ada7",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "3d691a10-2d39-48de-b2f5-82b6799bfd52",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
        "ingredient": {
          "id": "fed96ab6-56f4-41c8-adfe-2e362084000a",
          "name": "Salsinha",
          "slug": "salsinha",
          "displayName": "Salsinha",
          "aliases": [
            "Salsinha fresca"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "45624da8-d33c-40be-acd1-2c262340569c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 4,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "b740a8f1-5757-46d2-bbc1-11251a6be29c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1/2 xícara picada",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Salsinha",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Salsinha",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "a404f2f5-d156-4e25-be42-4d03830a7e9a",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta, colorau",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta, colorau",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "a6976d78-2bac-494c-bb51-0e0088ac3f12",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "stepNumber": 1,
        "instruction": "Processe o peito de frango no processador até textura de carne moída. Não bata além do necessário."
      },
      {
        "id": "b28553e8-96a6-4026-8aee-8c0b1676e34f",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite em frigideira grande em fogo médio-alto. Refogue a cebola e o alho até amolecer."
      },
      {
        "id": "3a5014ec-1fcc-4cd7-bd27-c9d8b43df7c7",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "stepNumber": 3,
        "instruction": "Acrescente o tomate picado e refogue por mais 2 minutos."
      },
      {
        "id": "58077cb9-f160-48fc-86ad-00c7ce912f32",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "stepNumber": 4,
        "instruction": "Adicione o frango moído. Cozinhe mexendo constantemente para não empelotar, quebrando os grumos com a espátula."
      },
      {
        "id": "275a62ba-3356-4c68-a5c2-021fcb8fbd66",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "stepNumber": 5,
        "instruction": "Tempere com sal, pimenta e colorau. Cozinhe até que não reste líquido e o frango esteja bem cozido e solto."
      },
      {
        "id": "71f5477d-b533-4055-bb5e-a0c8559e1a8c",
        "recipeId": "6ad281c1-05e0-45a9-970d-f8e4e905c378",
        "stepNumber": 6,
        "instruction": "Finalize com salsinha picada. Sirva."
      }
    ]
  },
  {
    "id": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Lombo Suíno Barbecue",
    "slug": "lombo-barbecue",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "suino",
    "status": "published",
    "imagePath": "/recipe-images/lombo-barbecue.png",
    "imageUrl": "/recipe-images/lombo-barbecue.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 900,
    "cookingMethod": "Selagem + panela de pressão + finalização com molho",
    "correctionFactor": null,
    "cookingFactor": 0.9,
    "baseYieldNote": "1kg de proteína principal rende cerca de 900g de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 3,
    "timeLevel": 3,
    "workLevel": 3,
    "practicalityLevel": 4,
    "versatilityLevel": 1,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 189.2,
      "proteinGPer100g": 23,
      "carbsGPer100g": 3.6,
      "fatGPer100g": 9.3,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 107,
    "tags": [
      {
        "id": "7f199b66-349b-4c20-952e-c1d3ae2a18ca",
        "name": "Suíno",
        "slug": "suino"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "10f81a1b-1300-4892-84b0-a3aaed799c25",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "ingredientId": "d67cd370-53b7-4897-a5a0-b6530ea255bd",
        "ingredient": {
          "id": "d67cd370-53b7-4897-a5a0-b6530ea255bd",
          "name": "Lombo suíno",
          "slug": "lombo-suino",
          "displayName": "Lombo suíno",
          "aliases": [],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 143,
            "proteinGPer100g": 20.5,
            "carbsGPer100g": 0,
            "fatGPer100g": 6.8,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "4df8796a-7976-4ba0-8823-0cb7c1aa5a02",
              "ingredientId": "d67cd370-53b7-4897-a5a0-b6530ea255bd",
              "measureName": "1 bife pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "e9b09677-5bc9-4e76-88fe-4a9a32a3c59c",
              "ingredientId": "d67cd370-53b7-4897-a5a0-b6530ea255bd",
              "measureName": "1 bife médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "94fd7d14-3078-4f56-9737-53bd007d9242",
              "ingredientId": "d67cd370-53b7-4897-a5a0-b6530ea255bd",
              "measureName": "1 fatia assada média",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Lombo suíno",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Lombo suíno",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "1841dd9a-c1af-4392-94f0-29e5edf643a2",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "ingredientId": "0262dc66-caab-46c5-9053-aacb77652723",
        "ingredient": {
          "id": "0262dc66-caab-46c5-9053-aacb77652723",
          "name": "Molho barbecue",
          "slug": "molho-barbecue",
          "displayName": "Molho barbecue",
          "aliases": [
            "Molho barbecue (Heinz)"
          ],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20001,
          "householdMeasures": [
            {
              "id": "bce5cce2-0adc-42d6-9dda-0812c2394a6a",
              "ingredientId": "0262dc66-caab-46c5-9053-aacb77652723",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 6,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bf0b07b6-707c-4ba6-9f75-b1cec2b841d5",
              "ingredientId": "0262dc66-caab-46c5-9053-aacb77652723",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 18,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Molho barbecue",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Molho barbecue",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "43bee72c-5877-43bc-99cb-358801848f7f",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "f2ebaeea-08ff-4ec1-8a99-584eff87d457",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "f5e4cdd3-c866-48ab-9c2a-4f8a206e7951",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta, ervas finas (alecrim, tomilho)",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta, ervas finas (alecrim, tomilho)",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "caebb7fa-e842-4dd0-b819-503c57217ea6",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "stepNumber": 1,
        "instruction": "Tempere o lombo com sal, pimenta, alho amassado e ervas. Deixe marinar por pelo menos 1 hora."
      },
      {
        "id": "a8a15239-8e9d-45f9-828b-e85bb7d1b374",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite em fogo alto na própria panela de pressão (aberta). Sele o lombo por todos os lados até criar crosta dourada."
      },
      {
        "id": "25e3dd10-aeb2-4906-acea-c837aca42086",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "stepNumber": 3,
        "instruction": "Acrescente ~200ml de água, tampe e cozinhe em pressão por 25–30 minutos."
      },
      {
        "id": "6b3133a9-a356-4074-ba17-f113968bfe62",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "stepNumber": 4,
        "instruction": "Libere a pressão e retire o lombo. Reserve ~150ml do caldo de cozimento na panela."
      },
      {
        "id": "c9b5f82a-71a8-4c4b-a230-4cd67efc933b",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "stepNumber": 5,
        "instruction": "Leve o caldo ao fogo médio e acrescente o molho barbecue. Mexa e deixe apurar por 5–8 minutos até engrossar levemente."
      },
      {
        "id": "f31497fb-1632-4dea-8b53-d0be28ff85e0",
        "recipeId": "c9bff63b-90d2-424b-bdd1-99f30f5c2be1",
        "stepNumber": 6,
        "instruction": "Fatie o lombo, regue com o molho barbecue e finalize com ervas frescas."
      }
    ]
  },
  {
    "id": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Patinho Moído",
    "slug": "patinho-moido",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "carne",
    "status": "published",
    "imagePath": "/recipe-images/patinho-moido.png",
    "imageUrl": "/recipe-images/patinho-moido.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 880,
    "cookingMethod": "Frigideira (preparo sequinho)",
    "correctionFactor": null,
    "cookingFactor": 0.88,
    "baseYieldNote": "1kg de proteína principal rende cerca de 880g de preparo pronto.",
    "prepTimeMinutes": 20,
    "costLevel": 3,
    "timeLevel": 2,
    "workLevel": 2,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 203.4,
      "proteinGPer100g": 23.9,
      "carbsGPer100g": 2.3,
      "fatGPer100g": 11,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 108,
    "tags": [
      {
        "id": "841299b8-b17e-4558-b522-b45663b91892",
        "name": "Carne",
        "slug": "carne"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "5b9f552d-fb5c-42cc-b48a-8b8c273f395e",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "ingredientId": "2396425c-508b-435a-b089-d08d093095af",
        "ingredient": {
          "id": "2396425c-508b-435a-b089-d08d093095af",
          "name": "Patinho moído",
          "slug": "patinho-moido",
          "displayName": "Patinho moído",
          "aliases": [],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 161,
            "proteinGPer100g": 20.7,
            "carbsGPer100g": 0,
            "fatGPer100g": 8.6,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "f2ba47de-770a-43ca-bf9f-480305b6e79b",
              "ingredientId": "2396425c-508b-435a-b089-d08d093095af",
              "measureName": "1 colher de servir cru",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "1848e746-b14c-4f86-849e-b1a95300aa79",
              "ingredientId": "2396425c-508b-435a-b089-d08d093095af",
              "measureName": "1 xícara cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Patinho moído",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Patinho moído",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "08179208-8ed4-4f28-a214-1411472b5221",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "c68b05f5-4a2b-4ae4-ae8f-81460cd20108",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "d952365a-19f0-4d3e-97f2-761403d0dc4c",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "ingredientId": "40000000-0000-0000-0000-000000000007",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000007",
          "name": "Tomate",
          "slug": "tomate",
          "displayName": "Tomate",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 18,
            "proteinGPer100g": 0.9,
            "carbsGPer100g": 3.9,
            "fatGPer100g": 0.2,
            "fiberGPer100g": 1.2,
            "sodiumMgPer100g": 5,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.05,
            "ediblePortionPercent": 95,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "c492e01a-de6b-47fe-b751-19e4ccea7ae6",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "0ece64ae-ca0c-44c3-aa76-d502d5793e83",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade média",
              "gramsEquivalent": 120,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "e13dd6c9-3810-4423-9f42-1772bf468548",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "eb625a7d-c96f-4d15-809c-752886da1123",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 colher de sopa picado",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Tomate",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Tomate",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "cf27bd1c-db8a-4e53-9e87-e2417136c6f6",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "789ced54-0974-4362-bbe9-e67620667360",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
        "ingredient": {
          "id": "fed96ab6-56f4-41c8-adfe-2e362084000a",
          "name": "Salsinha",
          "slug": "salsinha",
          "displayName": "Salsinha",
          "aliases": [
            "Salsinha fresca"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "45624da8-d33c-40be-acd1-2c262340569c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 4,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "b740a8f1-5757-46d2-bbc1-11251a6be29c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1/2 xícara picada",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Salsinha",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Salsinha",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "740aa5a1-9aae-4410-8e4c-d85d1f43f08f",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta-do-reino, colorau",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta-do-reino, colorau",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "963ea136-40db-47b9-9b5e-99182b243934",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "stepNumber": 1,
        "instruction": "Aqueça o azeite em frigideira grande em fogo alto. Refogue a cebola e o alho até dourar levemente."
      },
      {
        "id": "10be8d8d-beca-4b12-bb85-f5924a20c6c9",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "stepNumber": 2,
        "instruction": "Adicione o patinho moído e quebre os grumos com a espátula. Cozinhe em fogo alto mexendo sempre para soltar bem a carne."
      },
      {
        "id": "7b71efad-4b3d-4055-abcc-5dec8f4371bd",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "stepNumber": 3,
        "instruction": "Quando a carne não tiver mais partes rosadas, acrescente o tomate picado. Mexa e cozinhe até o tomate desmanchar."
      },
      {
        "id": "957c6163-a2b1-4cfe-8ffa-66c17facebc6",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "stepNumber": 4,
        "instruction": "Tempere com sal, pimenta e colorau. Continue em fogo médio até evaporar todo o líquido e a carne ficar bem sequinha e soltinha."
      },
      {
        "id": "b1f849b4-8618-43fc-9a88-25d02276afbb",
        "recipeId": "865935a0-443b-4b31-9a69-d4c91ebdb4a5",
        "stepNumber": 5,
        "instruction": "Finalize com salsinha picada. O ponto ideal é quando a carne começa a fritar levemente no próprio azeite que restou na frigideira."
      }
    ]
  },
  {
    "id": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Sobrecoxa Assada",
    "slug": "sobrecoxa-assada",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "frango",
    "status": "published",
    "imagePath": "/recipe-images/sobrecoxa-assada.png",
    "imageUrl": "/recipe-images/sobrecoxa-assada.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 682,
    "cookingMethod": "Forno",
    "correctionFactor": null,
    "cookingFactor": 0.682,
    "baseYieldNote": "1kg de proteína principal rende cerca de 682g de preparo pronto.",
    "prepTimeMinutes": 50,
    "costLevel": 3,
    "timeLevel": 3,
    "workLevel": 3,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 323.5,
      "proteinGPer100g": 25.4,
      "carbsGPer100g": 4.4,
      "fatGPer100g": 22.8,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 109,
    "tags": [
      {
        "id": "7af28f4b-769c-4f79-bb4b-eab488ecc472",
        "name": "Frango",
        "slug": "frango"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "b9c3a02d-9b16-4bd2-8d61-0d42be98df7a",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "ingredientId": "c2ed7e94-d077-4af6-b015-128df688924c",
        "ingredient": {
          "id": "c2ed7e94-d077-4af6-b015-128df688924c",
          "name": "Sobrecoxa de frango",
          "slug": "sobrecoxa-de-frango",
          "displayName": "Sobrecoxa de frango",
          "aliases": [
            "Sobrecoxa de frango (com osso e pele)"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "f19e1a38-363c-4bac-9dfd-790b36eb124d",
              "ingredientId": "c2ed7e94-d077-4af6-b015-128df688924c",
              "measureName": "1 unidade pequena crua sem osso",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "fb239f9e-6fcc-4833-abeb-052bbe6b48cd",
              "ingredientId": "c2ed7e94-d077-4af6-b015-128df688924c",
              "measureName": "1 unidade média crua sem osso",
              "gramsEquivalent": 130,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "8574295d-415d-4455-90f1-4592cf472e00",
              "ingredientId": "c2ed7e94-d077-4af6-b015-128df688924c",
              "measureName": "1 unidade grande crua sem osso",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Sobrecoxa de frango",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Sobrecoxa de frango",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "82504842-4fda-4de9-a77d-02732f8b8255",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 200,
        "quantidade": 200,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "bfd4a710-2fc4-4aea-b83b-36ca95d8533e",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "22b7dec5-b41f-4250-a326-c1644033a466",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "ingredientId": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
        "ingredient": {
          "id": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
          "name": "Limão",
          "slug": "limao",
          "displayName": "Limão",
          "aliases": [
            "Suco de limão"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 29,
            "proteinGPer100g": 0.5,
            "carbsGPer100g": 7,
            "fatGPer100g": 0.1,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "ec795cfb-1898-4c3c-bc18-7a312dac4152",
              "ingredientId": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 50,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "19c3f5b1-fbb2-4eae-9005-46238b981a6c",
              "ingredientId": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
              "measureName": "1 unidade média",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "52149d66-ae57-44e7-9aa8-4743c45f866b",
              "ingredientId": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
              "measureName": "suco de 1 limão médio",
              "gramsEquivalent": 35,
              "mlEquivalent": 35,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Limão",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Limão",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "a951af71-d8bc-41d3-a506-ac65a9df37e2",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "89ac8da1-5576-42c1-81cd-acac2a989b4b",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta, colorau, páprica defumada",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta, colorau, páprica defumada",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "866421cf-4308-4bfa-84ab-9fb694003271",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "stepNumber": 1,
        "instruction": "Tempere as sobrecoxas com sal, pimenta, colorau, páprica defumada, alho amassado e suco de limão. Esfregue bem por baixo da pele. Deixe marinar por pelo menos 2 horas (ou de um dia para o outro na geladeira)."
      },
      {
        "id": "166b26e0-752f-4e39-a45c-5481025369cd",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "stepNumber": 2,
        "instruction": "Cubra o fundo da assadeira com as rodelas de cebola. Disponha as sobrecoxas por cima com a pele para cima."
      },
      {
        "id": "fb2185a9-5b45-485a-bd98-c2df241adfa8",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "stepNumber": 3,
        "instruction": "Regue com o azeite e cubra a assadeira com papel alumínio."
      },
      {
        "id": "b0bcb1ff-1677-412e-869c-c985c8fd3407",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "stepNumber": 4,
        "instruction": "Leve ao forno preaquecido a 180°C por 40 minutos coberto."
      },
      {
        "id": "9c337441-68c0-4f1e-be97-66e98c769a4e",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "stepNumber": 5,
        "instruction": "Retire o papel alumínio, aumente o forno para 220°C e retorne por mais 15–20 minutos até a pele dourar e ficar crocante."
      },
      {
        "id": "2920aebb-11bc-4d55-ba58-b2fd30fec914",
        "recipeId": "2982c07b-fb60-44c5-bfde-a2217abbd1d7",
        "stepNumber": 6,
        "instruction": "Sirva com o caldo que se formou na assadeira."
      }
    ]
  },
  {
    "id": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Strogonoff de Frango",
    "slug": "strogonoff-frango",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "frango",
    "status": "published",
    "imagePath": "/recipe-images/strogonoff-frango.png",
    "imageUrl": "/recipe-images/strogonoff-frango.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1230,
    "cookingMethod": "Frigideira",
    "correctionFactor": null,
    "cookingFactor": 1.23,
    "baseYieldNote": "1kg de proteína principal rende cerca de 1,2kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 3,
    "timeLevel": 2,
    "workLevel": 3,
    "practicalityLevel": 4,
    "versatilityLevel": 1,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 129.1,
      "proteinGPer100g": 19.5,
      "carbsGPer100g": 3.7,
      "fatGPer100g": 4.1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 110,
    "tags": [
      {
        "id": "7af28f4b-769c-4f79-bb4b-eab488ecc472",
        "name": "Frango",
        "slug": "frango"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "1a8cf6aa-82c0-4acd-9d96-ed47c5175ae2",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
        "ingredient": {
          "id": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
          "name": "Peito de frango",
          "slug": "peito-de-frango",
          "displayName": "Peito de frango",
          "aliases": [
            "Peito de frango moído"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 110,
            "proteinGPer100g": 23,
            "carbsGPer100g": 0,
            "fatGPer100g": 2,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "c5ab4132-5727-43f7-b591-7096567ecd30",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "03ecd2ad-1710-40ad-90f2-bb9de3f87507",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "075285d8-0f83-498e-8605-7a3650f46cd6",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Peito de frango",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Peito de frango",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "cb194359-5d4c-4d9e-a2e9-e5f2f8573f54",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
        "ingredient": {
          "id": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
          "name": "Creme de leite light",
          "slug": "creme-de-leite-light",
          "displayName": "Creme de leite light",
          "aliases": [
            "Creme de leite light (Nestlé Levíssimo)"
          ],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20001,
          "householdMeasures": [
            {
              "id": "cff199d7-ae4a-48be-bf11-2a004b78d29f",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "3445dbdf-33bf-4194-884b-014400bfddc2",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1/2 caixinha",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "6f0936ad-f1b2-4258-acc7-81b7165635f9",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1 caixinha",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Creme de leite light",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 200,
        "quantidade": 200,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Creme de leite light",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "db8c9eb0-e676-4065-8f65-00ea8d173350",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
        "ingredient": {
          "id": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
          "name": "Extrato de tomate",
          "slug": "extrato-de-tomate",
          "displayName": "Extrato de tomate",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 32,
            "proteinGPer100g": 1.5,
            "carbsGPer100g": 6,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20004,
          "householdMeasures": [
            {
              "id": "bec4147f-c7fa-47b8-a296-98353fd743da",
              "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "91fce8e1-f95d-4bfb-848f-976aafc8a137",
              "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
              "measureName": "1 sachê pequeno",
              "gramsEquivalent": 130,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Extrato de tomate",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Extrato de tomate",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "962a8d84-e35a-42eb-9d49-31d74921dedb",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": "8a68e73e-cdfa-4414-a74e-cb9f0e61eee8",
        "ingredient": {
          "id": "8a68e73e-cdfa-4414-a74e-cb9f0e61eee8",
          "name": "Ketchup",
          "slug": "ketchup",
          "displayName": "Ketchup",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 100,
            "proteinGPer100g": 1.2,
            "carbsGPer100g": 23,
            "fatGPer100g": 0.4,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "201a29f6-05d6-428c-ab9f-b029b976526e",
              "ingredientId": "8a68e73e-cdfa-4414-a74e-cb9f0e61eee8",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7e6f64f5-cbc0-45cc-810b-d259e3db1385",
              "ingredientId": "8a68e73e-cdfa-4414-a74e-cb9f0e61eee8",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Ketchup",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Ketchup",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e78a67ed-4af2-4f15-bc3e-f6fbc483cd83",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": "54e1fb73-118a-40e1-a728-4fb45ea88825",
        "ingredient": {
          "id": "54e1fb73-118a-40e1-a728-4fb45ea88825",
          "name": "Mostarda amarela",
          "slug": "mostarda-amarela",
          "displayName": "Mostarda amarela",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 67,
            "proteinGPer100g": 4.4,
            "carbsGPer100g": 6.4,
            "fatGPer100g": 3.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20004,
          "householdMeasures": [
            {
              "id": "872e865c-f55f-4818-9ac2-9f179d207dc0",
              "ingredientId": "54e1fb73-118a-40e1-a728-4fb45ea88825",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "46717a62-f47f-4bdb-a61a-ac18060301a1",
              "ingredientId": "54e1fb73-118a-40e1-a728-4fb45ea88825",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Mostarda amarela",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Mostarda amarela",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "22190063-119c-41aa-9572-db37dc255119",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "2688a4de-c51d-42ec-b93c-d7c732396d72",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e661f15f-c272-4160-824b-40f75c0c9a1e",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 7,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "c26d9e27-aa87-4273-b41c-de2090aa50bb",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta-do-reino",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta-do-reino",
        "notes": null,
        "sortOrder": 8,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "446c35ba-ad86-4a78-95ab-69ebbf820464",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "stepNumber": 1,
        "instruction": "Corte o peito de frango em cubos de ~2cm. Tempere com sal e pimenta."
      },
      {
        "id": "5369926e-5d29-42f6-8b25-a12306927d2d",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite em frigideira grande em fogo alto. Sele os cubos até dourar por fora. Retire e reserve."
      },
      {
        "id": "8c6abe7f-6a9d-4151-ab5a-3306cf0d6620",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "stepNumber": 3,
        "instruction": "Na mesma frigideira, refogue a cebola picada e o alho até amolecer."
      },
      {
        "id": "e35ab1f9-732d-4a8f-bda1-ff8972e0e5c7",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "stepNumber": 4,
        "instruction": "Acrescente o extrato de tomate e refogue por 1–2 minutos."
      },
      {
        "id": "cf29e830-7265-48c5-9173-1f62c41de13f",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "stepNumber": 5,
        "instruction": "Volte os cubos de frango à frigideira. Adicione o ketchup e a mostarda. Misture bem."
      },
      {
        "id": "00051763-96b2-4acf-a2ed-73da527b1c03",
        "recipeId": "bec7a728-6b75-4bc5-ab31-2c69c29459f0",
        "stepNumber": 6,
        "instruction": "Reduza o fogo para médio-baixo e adicione o creme de leite. Misture delicadamente e deixe aquecer por 3–5 minutos sem ferver. Ajuste o sal e sirva."
      }
    ]
  },
  {
    "id": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Tilápia Grelhada",
    "slug": "tilapia-grelhada",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "peixe",
    "status": "published",
    "imagePath": "/recipe-images/tilapia-grelhada.png",
    "imageUrl": "/recipe-images/tilapia-grelhada.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 832,
    "cookingMethod": "Airfryer, forno ou frigideira antiaderente",
    "correctionFactor": null,
    "cookingFactor": 0.832,
    "baseYieldNote": "1kg de proteína principal rende cerca de 832g de preparo pronto.",
    "prepTimeMinutes": 15,
    "costLevel": 4,
    "timeLevel": 3,
    "workLevel": 2,
    "practicalityLevel": 3,
    "versatilityLevel": 2,
    "freezesWell": false,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 127.1,
      "proteinGPer100g": 24.2,
      "carbsGPer100g": 0.3,
      "fatGPer100g": 3.2,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 111,
    "tags": [
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      },
      {
        "id": "e00665ea-e3ac-49b8-9eb4-54c3307b4f69",
        "name": "Peixe",
        "slug": "peixe"
      }
    ],
    "ingredients": [
      {
        "id": "74f041ce-7f7c-424a-a30f-efb56894ba26",
        "recipeId": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
        "ingredientId": "d9ecce69-96a4-4ab0-8c15-2321bc3e8f8c",
        "ingredient": {
          "id": "d9ecce69-96a4-4ab0-8c15-2321bc3e8f8c",
          "name": "Filé de tilápia",
          "slug": "file-de-tilapia",
          "displayName": "Filé de tilápia",
          "aliases": [],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 96,
            "proteinGPer100g": 20.1,
            "carbsGPer100g": 0,
            "fatGPer100g": 1.7,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "bcaabb0f-4679-46e7-83f7-76a8359aa17d",
              "ingredientId": "d9ecce69-96a4-4ab0-8c15-2321bc3e8f8c",
              "measureName": "1 filé pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "fd03a986-34fc-4fc7-afed-9f29e9296b66",
              "ingredientId": "d9ecce69-96a4-4ab0-8c15-2321bc3e8f8c",
              "measureName": "1 filé médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "181b77a3-2f0c-4d47-b1ed-558491a43c7a",
              "ingredientId": "d9ecce69-96a4-4ab0-8c15-2321bc3e8f8c",
              "measureName": "1 filé grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Filé de tilápia",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Filé de tilápia",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "76d7011f-e240-4ec6-ba18-2a06aad65a86",
        "recipeId": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
        "ingredientId": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
        "ingredient": {
          "id": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
          "name": "Limão",
          "slug": "limao",
          "displayName": "Limão",
          "aliases": [
            "Suco de limão"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 29,
            "proteinGPer100g": 0.5,
            "carbsGPer100g": 7,
            "fatGPer100g": 0.1,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "ec795cfb-1898-4c3c-bc18-7a312dac4152",
              "ingredientId": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 50,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "19c3f5b1-fbb2-4eae-9005-46238b981a6c",
              "ingredientId": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
              "measureName": "1 unidade média",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "52149d66-ae57-44e7-9aa8-4743c45f866b",
              "ingredientId": "3c6a5a13-dca5-4db7-995f-aeac856af73f",
              "measureName": "suco de 1 limão médio",
              "gramsEquivalent": 35,
              "mlEquivalent": 35,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Limão",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Limão",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "b9633969-4653-4cc3-86fc-a4fcc45fe06a",
        "recipeId": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "b10692f5-eee6-408c-b62f-42d35f6b252c",
        "recipeId": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta-do-reino, lemon pepper (opcional)",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta-do-reino, lemon pepper (opcional)",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "a9e9cad4-1669-471e-9235-e5466453a3c5",
        "recipeId": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
        "stepNumber": 1,
        "instruction": "Tempere os filés com sal, pimenta (ou lemon pepper), suco de limão e um fio de azeite. Deixe marinar por 15–20 minutos."
      },
      {
        "id": "41ade4a9-85a5-4bff-88ff-092459581a16",
        "recipeId": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
        "stepNumber": 2,
        "instruction": "Airfryer: 200°C por 12–15 minutos, virando na metade. Forno: 220°C por 18–22 minutos. Frigideira: fio de azeite, fogo médio-alto, ~4 minutos de cada lado até soltar naturalmente da superfície."
      },
      {
        "id": "66278c82-c6ab-4f2d-952d-20ca8682c42a",
        "recipeId": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
        "stepNumber": 3,
        "instruction": "O ponto ideal é quando o filé está opaco por completo e se desprende facilmente com o garfo. Não cozinhe além disso — tilápia resseca rápido."
      },
      {
        "id": "48788bbc-7c70-4e56-ad6b-3fc377e42ab0",
        "recipeId": "19258841-cf25-4b53-aaa3-a92d1324f9d4",
        "stepNumber": 4,
        "instruction": "Sirva imediatamente."
      }
    ]
  },
  {
    "id": "fb72bc5a-3809-400d-80a5-10e00f70766c",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Strogonoff de Carne",
    "slug": "strogonoff-de-carne",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "carne",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1230,
    "cookingMethod": "Frigideira",
    "correctionFactor": null,
    "cookingFactor": 1.23,
    "baseYieldNote": "1kg de proteína principal rende cerca de 1,2kg de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 3,
    "timeLevel": 2,
    "workLevel": 3,
    "practicalityLevel": 4,
    "versatilityLevel": 1,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 170.6,
      "proteinGPer100g": 17.6,
      "carbsGPer100g": 3.7,
      "fatGPer100g": 9.5,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 112,
    "tags": [
      {
        "id": "841299b8-b17e-4558-b522-b45663b91892",
        "name": "Carne",
        "slug": "carne"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "4c0068ee-d064-4128-b15c-a400054369af",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": "5a795f92-8899-4f97-a071-e35520ae2d62",
        "ingredient": {
          "id": "5a795f92-8899-4f97-a071-e35520ae2d62",
          "name": "Patinho",
          "slug": "patinho",
          "displayName": "Patinho",
          "aliases": [
            "Patinho (tiras finas)"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "3a91b477-f836-49a9-ae5b-0ca8d3691d87",
              "ingredientId": "5a795f92-8899-4f97-a071-e35520ae2d62",
              "measureName": "1 bife pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "efc640ce-6b31-4695-9343-bfd5d16ffa8b",
              "ingredientId": "5a795f92-8899-4f97-a071-e35520ae2d62",
              "measureName": "1 bife médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "a23c1ecd-4c62-492a-bba1-35d94b1eeff7",
              "ingredientId": "5a795f92-8899-4f97-a071-e35520ae2d62",
              "measureName": "1 bife grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Patinho",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Patinho",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "cce280e2-a4f5-4821-be97-c5202cecc452",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
        "ingredient": {
          "id": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
          "name": "Creme de leite light",
          "slug": "creme-de-leite-light",
          "displayName": "Creme de leite light",
          "aliases": [
            "Creme de leite light (Nestlé Levíssimo)"
          ],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20001,
          "householdMeasures": [
            {
              "id": "cff199d7-ae4a-48be-bf11-2a004b78d29f",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "3445dbdf-33bf-4194-884b-014400bfddc2",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1/2 caixinha",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "6f0936ad-f1b2-4258-acc7-81b7165635f9",
              "ingredientId": "f0ed68eb-0e78-41e9-a63d-6bbec2bb83f7",
              "measureName": "1 caixinha",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Creme de leite light",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 200,
        "quantidade": 200,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Creme de leite light",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "aac6bd96-0de8-469f-bb62-3c8e249b92ab",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
        "ingredient": {
          "id": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
          "name": "Extrato de tomate",
          "slug": "extrato-de-tomate",
          "displayName": "Extrato de tomate",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 32,
            "proteinGPer100g": 1.5,
            "carbsGPer100g": 6,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20004,
          "householdMeasures": [
            {
              "id": "bec4147f-c7fa-47b8-a296-98353fd743da",
              "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "91fce8e1-f95d-4bfb-848f-976aafc8a137",
              "ingredientId": "ba274e2a-ec84-43f8-b803-a0690e2dedc9",
              "measureName": "1 sachê pequeno",
              "gramsEquivalent": 130,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Extrato de tomate",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Extrato de tomate",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "bf507acd-bac9-4176-bfd2-05f04c9819ee",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": "8a68e73e-cdfa-4414-a74e-cb9f0e61eee8",
        "ingredient": {
          "id": "8a68e73e-cdfa-4414-a74e-cb9f0e61eee8",
          "name": "Ketchup",
          "slug": "ketchup",
          "displayName": "Ketchup",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 100,
            "proteinGPer100g": 1.2,
            "carbsGPer100g": 23,
            "fatGPer100g": 0.4,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "201a29f6-05d6-428c-ab9f-b029b976526e",
              "ingredientId": "8a68e73e-cdfa-4414-a74e-cb9f0e61eee8",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7e6f64f5-cbc0-45cc-810b-d259e3db1385",
              "ingredientId": "8a68e73e-cdfa-4414-a74e-cb9f0e61eee8",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Ketchup",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 30,
        "quantidade": 30,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Ketchup",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "9c0cd01e-a786-4ffa-930b-37006eec5c6e",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": "54e1fb73-118a-40e1-a728-4fb45ea88825",
        "ingredient": {
          "id": "54e1fb73-118a-40e1-a728-4fb45ea88825",
          "name": "Mostarda amarela",
          "slug": "mostarda-amarela",
          "displayName": "Mostarda amarela",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 67,
            "proteinGPer100g": 4.4,
            "carbsGPer100g": 6.4,
            "fatGPer100g": 3.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20004,
          "householdMeasures": [
            {
              "id": "872e865c-f55f-4818-9ac2-9f179d207dc0",
              "ingredientId": "54e1fb73-118a-40e1-a728-4fb45ea88825",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "46717a62-f47f-4bdb-a61a-ac18060301a1",
              "ingredientId": "54e1fb73-118a-40e1-a728-4fb45ea88825",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Mostarda amarela",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Mostarda amarela",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "f67c7cc2-c5a7-41a9-a2c9-f224c9f851f7",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "5222adba-78be-46bb-abc6-bfefc90d98f3",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "772dc10e-5833-41ef-9820-dbf5374a6f2e",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 7,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "58d4f6c0-dd0c-42f9-9a37-45283cc8784a",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta-do-reino",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta-do-reino",
        "notes": null,
        "sortOrder": 8,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "727371ab-eabd-4045-810d-e411f326ce36",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "stepNumber": 1,
        "instruction": "Corte o patinho em tiras finas de ~5mm de espessura. Tempere com sal e pimenta."
      },
      {
        "id": "0e99f668-8537-468d-a58e-9678cdac62a7",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite em frigideira grande em fogo muito alto. Sele as tiras em pequenas porções (sem lotar a frigideira) para dourar e não cozinhar no vapor. Reserve."
      },
      {
        "id": "490b818d-9675-4bf2-8886-27b37bf02926",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "stepNumber": 3,
        "instruction": "Na mesma frigideira, refogue a cebola e o alho."
      },
      {
        "id": "e85725c6-9e5e-4bfb-bd5e-053c6270d036",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "stepNumber": 4,
        "instruction": "Acrescente o extrato de tomate e refogue 1–2 minutos."
      },
      {
        "id": "0e08532f-bb93-4ae8-a2b2-eb3ae3e9628c",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "stepNumber": 5,
        "instruction": "Volte a carne. Adicione ketchup e mostarda. Misture."
      },
      {
        "id": "03ab2452-5fa9-4505-8015-708198d6d5fd",
        "recipeId": "fb72bc5a-3809-400d-80a5-10e00f70766c",
        "stepNumber": 6,
        "instruction": "Reduza o fogo e acrescente o creme de leite. Aqueça sem ferver por 3–5 minutos. Ajuste o sal."
      }
    ]
  },
  {
    "id": "25e08d26-0072-46bd-8738-a3a587fcfc96",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Iscas de Carne Aceboladas com Pimentão e Tomate",
    "slug": "iscas-de-carne-aceboladas-com-pimentao-e-tomate",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "carne",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1300,
    "cookingMethod": "Frigideira",
    "correctionFactor": null,
    "cookingFactor": 1.3,
    "baseYieldNote": "1kg de proteína principal rende cerca de 1,3kg de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 3,
    "timeLevel": 2,
    "workLevel": 2,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 136.8,
      "proteinGPer100g": 17.1,
      "carbsGPer100g": 4,
      "fatGPer100g": 5.9,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 113,
    "tags": [
      {
        "id": "841299b8-b17e-4558-b522-b45663b91892",
        "name": "Carne",
        "slug": "carne"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "ef42d287-970b-43c9-8611-0325d9d2ca6f",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "ingredientId": "080f7052-b190-4cc4-868b-9e773f7983d6",
        "ingredient": {
          "id": "080f7052-b190-4cc4-868b-9e773f7983d6",
          "name": "Coxão mole",
          "slug": "coxao-mole",
          "displayName": "Coxão mole",
          "aliases": [
            "Coxão mole (ou patinho)"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "a78316eb-b9f2-4b5d-b3b2-1f44d80bf96a",
              "ingredientId": "080f7052-b190-4cc4-868b-9e773f7983d6",
              "measureName": "1 bife pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "c6aaa47f-200c-4669-b5b4-5b703c5070a7",
              "ingredientId": "080f7052-b190-4cc4-868b-9e773f7983d6",
              "measureName": "1 bife médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "6ea6ebb4-f966-4a0f-be2b-eb67ab38c3f4",
              "ingredientId": "080f7052-b190-4cc4-868b-9e773f7983d6",
              "measureName": "1 bife grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Coxão mole",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Coxão mole",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "732628ac-7b3f-4080-83b2-dfc243fbf77c",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 240,
        "quantidade": 240,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "29be8ed1-278a-4f4b-a92e-5865e8bc00cf",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "ingredientId": "40000000-0000-0000-0000-000000000007",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000007",
          "name": "Tomate",
          "slug": "tomate",
          "displayName": "Tomate",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 18,
            "proteinGPer100g": 0.9,
            "carbsGPer100g": 3.9,
            "fatGPer100g": 0.2,
            "fiberGPer100g": 1.2,
            "sodiumMgPer100g": 5,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.05,
            "ediblePortionPercent": 95,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "c492e01a-de6b-47fe-b751-19e4ccea7ae6",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "0ece64ae-ca0c-44c3-aa76-d502d5793e83",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade média",
              "gramsEquivalent": 120,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "e13dd6c9-3810-4423-9f42-1772bf468548",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "eb625a7d-c96f-4d15-809c-752886da1123",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 colher de sopa picado",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Tomate",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 240,
        "quantidade": 240,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Tomate",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "8ef028b9-af6c-420d-b49a-0f6612e121dc",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
        "ingredient": {
          "id": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
          "name": "Pimentão",
          "slug": "pimentao",
          "displayName": "Pimentão",
          "aliases": [
            "Pimentão (misto)"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 28,
            "proteinGPer100g": 1,
            "carbsGPer100g": 6,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "afb1bbb6-3dd2-4d40-9bf4-9e290a87d32a",
              "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "08bbe647-aba9-48ba-a14c-790edb3af23f",
              "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "2e9f3910-b871-461d-8dff-5ba337287e71",
              "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "8ca2e165-435b-4f06-af57-2fae8cfe019f",
              "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
              "measureName": "1 colher de sopa picado",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Pimentão",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 240,
        "quantidade": 240,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Pimentão",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "63f03b98-0124-4b93-9841-b795520cbdd1",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "004f3d33-2f47-4766-a87f-be67a40e357c",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "a2d777cb-0b4f-485b-a009-a0e71a7fef57",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta, colorau, orégano",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta, colorau, orégano",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "697cabc6-96a1-4095-bf88-970f163ef417",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "stepNumber": 1,
        "instruction": "Corte a carne em tiras de ~1cm de espessura e ~5cm de comprimento. Tempere com sal, pimenta e colorau."
      },
      {
        "id": "9f848bbd-224b-4105-be0d-0a2ed55e5a51",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite em frigideira grande (ou wok) em fogo muito alto. Sele as iscas em lotes para não cozinhar no vapor. Reserve."
      },
      {
        "id": "2177f877-cbe2-4cf8-a839-da3b9cd3b5a6",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "stepNumber": 3,
        "instruction": "Na mesma frigideira, refogue o alho rapidamente. Acrescente a cebola em tiras e o pimentão. Refogue em fogo alto por 3–4 minutos — os legumes devem ficar al dente, não moles."
      },
      {
        "id": "e08ddf8e-9d52-4292-a50f-ef45c4e92c20",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "stepNumber": 4,
        "instruction": "Adicione o tomate em cubos, misture e refogue por mais 2 minutos."
      },
      {
        "id": "01c0a8bd-df14-4910-8cd7-537ba043ae48",
        "recipeId": "25e08d26-0072-46bd-8738-a3a587fcfc96",
        "stepNumber": 5,
        "instruction": "Volte a carne à frigideira, misture tudo, acerte o sal e finalize com orégano. Sirva imediatamente."
      }
    ]
  },
  {
    "id": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
    "categoryId": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
    "category": {
      "id": "d2b78ceb-684f-4bff-a8cb-f6d53a5e8c16",
      "name": "Proteínas",
      "slug": "proteinas",
      "description": "Preparo de proteínas para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 1
    },
    "name": "Iscas de Frango Aceboladas com Pimentão e Tomate",
    "slug": "iscas-de-frango-aceboladas-com-pimentao-e-tomate",
    "shortDescription": "Preparo de proteína para planejar porções por peso pronto.",
    "type": "frango",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1300,
    "cookingMethod": "Frigideira",
    "correctionFactor": null,
    "cookingFactor": 1.3,
    "baseYieldNote": "1kg de proteína principal rende cerca de 1,3kg de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 3,
    "timeLevel": 2,
    "workLevel": 2,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 113,
      "proteinGPer100g": 18.3,
      "carbsGPer100g": 4,
      "fatGPer100g": 2.8,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 114,
    "tags": [
      {
        "id": "7af28f4b-769c-4f79-bb4b-eab488ecc472",
        "name": "Frango",
        "slug": "frango"
      },
      {
        "id": "db6988c6-e7fb-48ae-86d1-4f95db6bf441",
        "name": "Proteínas",
        "slug": "proteinas"
      }
    ],
    "ingredients": [
      {
        "id": "ba330b8a-356d-4aff-a8c8-6e2c92b16d3c",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
        "ingredient": {
          "id": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
          "name": "Peito de frango",
          "slug": "peito-de-frango",
          "displayName": "Peito de frango",
          "aliases": [
            "Peito de frango moído"
          ],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 110,
            "proteinGPer100g": 23,
            "carbsGPer100g": 0,
            "fatGPer100g": 2,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20000,
          "householdMeasures": [
            {
              "id": "c5ab4132-5727-43f7-b591-7096567ecd30",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé pequeno cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "03ecd2ad-1710-40ad-90f2-bb9de3f87507",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé médio cru",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "075285d8-0f83-498e-8605-7a3650f46cd6",
              "ingredientId": "cf6ea440-f8ad-4807-bddd-88a994478ca9",
              "measureName": "1 filé grande cru",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Peito de frango",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Peito de frango",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "8b5995f3-b1ee-4ee6-9b41-e48cd11eddc5",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 240,
        "quantidade": 240,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "b1d9c43f-3975-47b3-9234-4c78e1bb7505",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "ingredientId": "40000000-0000-0000-0000-000000000007",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000007",
          "name": "Tomate",
          "slug": "tomate",
          "displayName": "Tomate",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 18,
            "proteinGPer100g": 0.9,
            "carbsGPer100g": 3.9,
            "fatGPer100g": 0.2,
            "fiberGPer100g": 1.2,
            "sodiumMgPer100g": 5,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.05,
            "ediblePortionPercent": 95,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "c492e01a-de6b-47fe-b751-19e4ccea7ae6",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "0ece64ae-ca0c-44c3-aa76-d502d5793e83",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade média",
              "gramsEquivalent": 120,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "e13dd6c9-3810-4423-9f42-1772bf468548",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "eb625a7d-c96f-4d15-809c-752886da1123",
              "ingredientId": "40000000-0000-0000-0000-000000000007",
              "measureName": "1 colher de sopa picado",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Tomate",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 240,
        "quantidade": 240,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Tomate",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "be54f24c-5a76-494e-8ebc-2df271c5e4ea",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
        "ingredient": {
          "id": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
          "name": "Pimentão",
          "slug": "pimentao",
          "displayName": "Pimentão",
          "aliases": [
            "Pimentão (misto)"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 28,
            "proteinGPer100g": 1,
            "carbsGPer100g": 6,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de receitas. Podem variar conforme marca, corte e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 20003,
          "householdMeasures": [
            {
              "id": "afb1bbb6-3dd2-4d40-9bf4-9e290a87d32a",
              "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "08bbe647-aba9-48ba-a14c-790edb3af23f",
              "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "2e9f3910-b871-461d-8dff-5ba337287e71",
              "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 200,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "8ca2e165-435b-4f06-af57-2fae8cfe019f",
              "ingredientId": "44a89a51-7f88-4066-bc71-34ae2b66ba28",
              "measureName": "1 colher de sopa picado",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Pimentão",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 240,
        "quantidade": 240,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Pimentão",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "bbfc9db9-dbd9-4b0f-9b65-8b1ee43a46ec",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "743bb683-195e-4e45-afa9-93428820e966",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e8ce8bfb-0764-4dba-9a65-2eb2e81ebf22",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta, colorau, orégano",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta, colorau, orégano",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "bb641b4b-39ab-447c-bd3f-0ea9f618ba2d",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "stepNumber": 1,
        "instruction": "Corte o peito de frango em tiras de ~1cm de espessura. Tempere com sal, pimenta e colorau."
      },
      {
        "id": "6f22974e-eb8a-4677-8efd-4da0cba82add",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite em frigideira grande em fogo alto. Sele as iscas de frango até dourarem. Reserve."
      },
      {
        "id": "c20bacf8-1d5f-4ea3-84a5-580f5a6ad898",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "stepNumber": 3,
        "instruction": "Refogue o alho rapidamente. Acrescente a cebola em tiras e o pimentão. Cozinhe em fogo alto por 3–4 minutos mantendo os legumes al dente."
      },
      {
        "id": "dbfb121d-c236-44ae-a4d9-d99e29f4f5a9",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "stepNumber": 4,
        "instruction": "Adicione o tomate em cubos e refogue por 2 minutos."
      },
      {
        "id": "9f576102-5122-4637-98fe-daa4a755d34e",
        "recipeId": "b780a7fa-59e4-4d52-a25d-8cd137fca6bb",
        "stepNumber": 5,
        "instruction": "Volte o frango à frigideira, misture, ajuste o sal e finalize com orégano."
      }
    ]
  },
  {
    "id": "74a57b68-5934-40b6-aac9-cb4d5fc8e637",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Abóbora Cozida",
    "slug": "abobora-cozida",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "legumes",
    "status": "published",
    "imagePath": "/recipe-images/abobora-cozida.png",
    "imageUrl": "/recipe-images/abobora-cozida.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1010,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 820,
    "cookingMethod": "Cozimento em água",
    "correctionFactor": null,
    "cookingFactor": 0.812,
    "baseYieldNote": "1kg de ingredientes medidos rende cerca de 820g de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 32.1,
      "proteinGPer100g": 1.6,
      "carbsGPer100g": 7.4,
      "fatGPer100g": 0.1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 212,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "943378ad-64a5-4e3c-9f5a-823546885277",
        "name": "Legumes",
        "slug": "legumes"
      }
    ],
    "ingredients": [
      {
        "id": "bd905e41-9861-4308-bd98-b667c21b94c4",
        "recipeId": "74a57b68-5934-40b6-aac9-cb4d5fc8e637",
        "ingredientId": "4f187b43-472b-4c15-b658-11b787ab3740",
        "ingredient": {
          "id": "4f187b43-472b-4c15-b658-11b787ab3740",
          "name": "Abóbora",
          "slug": "abobora",
          "displayName": "Abóbora",
          "aliases": [
            "Abóbora (limpa, sem sementes)"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "6561d0fc-936a-4374-ab5b-b4b341f91067",
              "ingredientId": "4f187b43-472b-4c15-b658-11b787ab3740",
              "measureName": "1 colher de sopa cozida",
              "gramsEquivalent": 35,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "ede323bc-e874-4cad-bc9c-96c651cdfe07",
              "ingredientId": "4f187b43-472b-4c15-b658-11b787ab3740",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ab90e184-1ef0-4d04-8800-9c01c83192e7",
              "ingredientId": "4f187b43-472b-4c15-b658-11b787ab3740",
              "measureName": "1 xícara em cubos cozida",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Abóbora",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Abóbora",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "c26c40df-1a78-4504-a442-dcbce5759d05",
        "recipeId": "74a57b68-5934-40b6-aac9-cb4d5fc8e637",
        "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
        "ingredient": {
          "id": "fed96ab6-56f4-41c8-adfe-2e362084000a",
          "name": "Salsinha",
          "slug": "salsinha",
          "displayName": "Salsinha",
          "aliases": [
            "Salsinha fresca"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "45624da8-d33c-40be-acd1-2c262340569c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 4,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "b740a8f1-5757-46d2-bbc1-11251a6be29c",
              "ingredientId": "fed96ab6-56f4-41c8-adfe-2e362084000a",
              "measureName": "1/2 xícara picada",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Salsinha",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Salsinha",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "17afee0a-ca8e-4f83-aa07-2fba44a2f168",
        "recipeId": "74a57b68-5934-40b6-aac9-cb4d5fc8e637",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "4fe5acd6-ab13-4098-b78a-f0935124d5b0",
        "recipeId": "74a57b68-5934-40b6-aac9-cb4d5fc8e637",
        "stepNumber": 1,
        "instruction": "Descasque a abóbora, remova as sementes e corte em cubos de ~3cm."
      },
      {
        "id": "09c6d95e-c46f-4b4e-9662-92469c3d2bb7",
        "recipeId": "74a57b68-5934-40b6-aac9-cb4d5fc8e637",
        "stepNumber": 2,
        "instruction": "Leve ao fogo em panela com água suficiente para cobrir e sal a gosto."
      },
      {
        "id": "e8f0e0fc-0158-406c-8f68-e23363d20bf7",
        "recipeId": "74a57b68-5934-40b6-aac9-cb4d5fc8e637",
        "stepNumber": 3,
        "instruction": "Cozinhe por 15–20 minutos até ficar macia ao garfo. Escorra bem."
      },
      {
        "id": "c8418de4-3e56-4520-8a82-0b6900496af8",
        "recipeId": "74a57b68-5934-40b6-aac9-cb4d5fc8e637",
        "stepNumber": 4,
        "instruction": "Finalize com salsinha picada se quiser. Sirva simples ou como acompanhamento."
      }
    ]
  },
  {
    "id": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz com Açafrão",
    "slug": "arroz-acafrao",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": "/recipe-images/arroz-acafrao.png",
    "imageUrl": "/recipe-images/arroz-acafrao.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 540,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1430,
    "cookingMethod": "Refogado + cozimento tampado",
    "correctionFactor": null,
    "cookingFactor": 2.648,
    "baseYieldNote": "540g de ingredientes medidos rende cerca de 1,4kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 138.5,
      "proteinGPer100g": 2.7,
      "carbsGPer100g": 28.3,
      "fatGPer100g": 1.2,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 213,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "0fba86b0-d282-4328-88c9-f6d7adf0d445",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
        "ingredient": {
          "id": "16d123da-0306-4c63-8194-27d7c2a827c7",
          "name": "Arroz branco",
          "slug": "arroz-branco",
          "displayName": "Arroz branco",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 360,
            "proteinGPer100g": 7.4,
            "carbsGPer100g": 79,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "321d1271-4d8f-43dd-9daa-60d4afd86652",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "88bc90a2-b93c-4e20-a4e1-bf3276f1d749",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "973aad03-9104-447d-a8c7-f08aaee06f94",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "acf1ae89-c5ed-42e2-bb57-dae5323ce56d",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "ccfb848a-7572-47de-b475-b6408a3505a7",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz branco",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz branco",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "4bca02ce-f8df-46ab-9433-b41f4adf006c",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "ingredientId": "85eab4bc-ea16-40bd-91cf-166d04a93fc6",
        "ingredient": {
          "id": "85eab4bc-ea16-40bd-91cf-166d04a93fc6",
          "name": "Açafrão-da-terra",
          "slug": "acafrao-da-terra",
          "displayName": "Açafrão-da-terra",
          "aliases": [
            "Açafrão-da-terra (cúrcuma)",
            "Cúrcuma"
          ],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "f5286d0d-13b0-4cd4-966a-1dbd7af7908e",
              "ingredientId": "85eab4bc-ea16-40bd-91cf-166d04a93fc6",
              "measureName": "1 colher de chá rasa",
              "gramsEquivalent": 2,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "b30c2f80-1d94-4c24-afb4-ab86672061bb",
              "ingredientId": "85eab4bc-ea16-40bd-91cf-166d04a93fc6",
              "measureName": "1 colher de sopa rasa",
              "gramsEquivalent": 6,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Açafrão-da-terra",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 5,
        "quantidade": 5,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Açafrão-da-terra",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "d775cdc3-811e-4c9f-9ad7-a7a63c2aa11a",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "2db7cc07-0ebe-4f99-a57a-ed7e1dded227",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "8ae76237-b877-4042-93ce-8c159ab9e80c",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "54bdde4d-3d68-4834-a3f3-4455ddfd982f",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "stepNumber": 1,
        "instruction": "Aqueça o azeite em panela média em fogo médio. Refogue o alho amassado até dourar levemente."
      },
      {
        "id": "3a48824f-0123-4660-aaac-27f1ce40caa8",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "stepNumber": 2,
        "instruction": "Acrescente o açafrão-da-terra e mexa por 30 segundos para ativar a cor e o aroma."
      },
      {
        "id": "c39cf47e-bfed-4aea-ba98-b2ea6c7a6ad8",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "stepNumber": 3,
        "instruction": "Adicione o arroz (sem lavar ou já lavado, conforme preferência). Refogue por 1–2 minutos."
      },
      {
        "id": "dbd23f0c-77f1-4ff1-a182-5838cd4cf81d",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "stepNumber": 4,
        "instruction": "Acrescente água quente na proporção de 1:1,8 (900ml para 500g de arroz) e sal. Misture, tampe e cozinhe em fogo baixo por 15 minutos."
      },
      {
        "id": "913e0ee1-cbf2-4221-9b2e-ffb3c9230e22",
        "recipeId": "562bab16-65c5-4fa3-8960-ce09b9c06b17",
        "stepNumber": 5,
        "instruction": "Desligue, mantenha tampado por mais 5 minutos. Solte com garfo antes de servir."
      }
    ]
  },
  {
    "id": "684ac207-b312-49d0-8226-823be46478e5",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz com Cenoura",
    "slug": "arroz-branco-cenoura",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": "/recipe-images/arroz-branco-cenoura.png",
    "imageUrl": "/recipe-images/arroz-branco-cenoura.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 635,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1500,
    "cookingMethod": "Refogado + cozimento tampado",
    "correctionFactor": null,
    "cookingFactor": 2.362,
    "baseYieldNote": "635g de ingredientes medidos rende cerca de 1,5kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 133.1,
      "proteinGPer100g": 2.6,
      "carbsGPer100g": 27.3,
      "fatGPer100g": 1.1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 214,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "b7cb4902-f2db-4bf2-8231-ce17153e8765",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
        "ingredient": {
          "id": "16d123da-0306-4c63-8194-27d7c2a827c7",
          "name": "Arroz branco",
          "slug": "arroz-branco",
          "displayName": "Arroz branco",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 360,
            "proteinGPer100g": 7.4,
            "carbsGPer100g": 79,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "321d1271-4d8f-43dd-9daa-60d4afd86652",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "88bc90a2-b93c-4e20-a4e1-bf3276f1d749",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "973aad03-9104-447d-a8c7-f08aaee06f94",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "acf1ae89-c5ed-42e2-bb57-dae5323ce56d",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "ccfb848a-7572-47de-b475-b6408a3505a7",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz branco",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz branco",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "c2077ad9-40d5-4c7c-9994-161b837dcca9",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "ingredientId": "40000000-0000-0000-0000-000000000009",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000009",
          "name": "Cenoura",
          "slug": "cenoura",
          "displayName": "Cenoura",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 34,
            "proteinGPer100g": 0.7,
            "carbsGPer100g": 7.7,
            "fatGPer100g": 0.3,
            "fiberGPer100g": 2.8,
            "sodiumMgPer100g": 69,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.1,
            "ediblePortionPercent": 91,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "2329ad41-7876-43b3-a0a9-9a457554b5af",
              "ingredientId": "40000000-0000-0000-0000-000000000009",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 60,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2fc7ee52-5e03-4508-87c3-86402446a1ac",
              "ingredientId": "40000000-0000-0000-0000-000000000009",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ca0d714b-ea5c-43ea-8c9b-0a152c1a5885",
              "ingredientId": "40000000-0000-0000-0000-000000000009",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "12d1957a-2456-4fd6-a4b9-a1da1e03f971",
              "ingredientId": "40000000-0000-0000-0000-000000000009",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cenoura",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cenoura",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "d3721f5a-14cf-40b4-b8c0-102f3851ff2b",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "22bb5b48-de30-4025-a2e2-390141ed301c",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "baa519b3-7898-45f0-aaa1-be4b17be4c21",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "8eb914ab-0538-4162-876a-3ae5997cc309",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "stepNumber": 1,
        "instruction": "Rale a cenoura no lado grosso do ralador."
      },
      {
        "id": "275d699e-7878-4dcd-b02a-0a28b5a982bc",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "stepNumber": 2,
        "instruction": "Aqueça o azeite, refogue o alho. Acrescente a cenoura ralada e refogue por 2 minutos."
      },
      {
        "id": "145aca6a-e3e2-4b73-a42f-b2f4a19c859d",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "stepNumber": 3,
        "instruction": "Adicione o arroz, refogue por 1–2 minutos. Acrescente água quente e sal."
      },
      {
        "id": "29775dbb-0ecd-4b59-8aa4-b95749026f05",
        "recipeId": "684ac207-b312-49d0-8226-823be46478e5",
        "stepNumber": 4,
        "instruction": "Cozinhe tampado em fogo baixo por 15 minutos. Descanse 5 minutos tampado antes de servir."
      }
    ]
  },
  {
    "id": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz Branco",
    "slug": "arroz-branco-cozido",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": "/recipe-images/arroz-branco-cozido.png",
    "imageUrl": "/recipe-images/arroz-branco-cozido.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 635,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1450,
    "cookingMethod": "Refogado + cozimento tampado",
    "correctionFactor": null,
    "cookingFactor": 2.283,
    "baseYieldNote": "635g de ingredientes medidos rende cerca de 1,5kg de preparo pronto.",
    "prepTimeMinutes": 25,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 138.1,
      "proteinGPer100g": 2.7,
      "carbsGPer100g": 28.3,
      "fatGPer100g": 1.1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 215,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "ec0a5d55-dc8f-4a4c-a790-fcb627623f27",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
        "ingredient": {
          "id": "16d123da-0306-4c63-8194-27d7c2a827c7",
          "name": "Arroz branco",
          "slug": "arroz-branco",
          "displayName": "Arroz branco",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 360,
            "proteinGPer100g": 7.4,
            "carbsGPer100g": 79,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "321d1271-4d8f-43dd-9daa-60d4afd86652",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "88bc90a2-b93c-4e20-a4e1-bf3276f1d749",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "973aad03-9104-447d-a8c7-f08aaee06f94",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "acf1ae89-c5ed-42e2-bb57-dae5323ce56d",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "ccfb848a-7572-47de-b475-b6408a3505a7",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz branco",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz branco",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "cb197c47-1d54-42c5-aabf-6513bfc3d0f3",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "b82a8aaa-0da2-4a08-a625-239b5cade06b",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "01e69392-9fc4-4763-84e0-cec62d2e4694",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "36dbe890-c9b1-4d7d-9b9c-d9def164aa29",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "69d31387-905b-442e-a1a2-5da78680a759",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "stepNumber": 1,
        "instruction": "Aqueça o azeite em fogo médio. Refogue a cebola picada até amolecer (~3 minutos). Adicione o alho e refogue mais 1 minuto."
      },
      {
        "id": "f2f77cc8-0f13-446a-acc6-5b22de42e5e6",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "stepNumber": 2,
        "instruction": "Acrescente o arroz e refogue por 2 minutos até os grãos ficarem levemente translúcidos."
      },
      {
        "id": "88048e89-1533-42d7-86c7-6dcca802e1b6",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "stepNumber": 3,
        "instruction": "Adicione água quente (900ml), sal, tampe e cozinhe em fogo baixo por 15 minutos."
      },
      {
        "id": "64b4ffa3-1321-421d-9267-29d0a60e7a99",
        "recipeId": "01bf7a45-e6b5-4e51-b006-b9a5427bd429",
        "stepNumber": 4,
        "instruction": "Desligue e descanse tampado por 5 minutos. Solte com garfo antes de servir."
      }
    ]
  },
  {
    "id": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz à Grega",
    "slug": "arroz-branco-grega",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": "/recipe-images/arroz-branco-grega.png",
    "imageUrl": "/recipe-images/arroz-branco-grega.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 835,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1700,
    "cookingMethod": "Refogado + cozimento tampado",
    "correctionFactor": null,
    "cookingFactor": 2.036,
    "baseYieldNote": "835g de ingredientes medidos rende cerca de 1,7kg de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 2,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 125.5,
      "proteinGPer100g": 2.7,
      "carbsGPer100g": 25.6,
      "fatGPer100g": 1.1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 216,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "f6d67209-d2ea-4646-9027-d86e8ba3e188",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
        "ingredient": {
          "id": "16d123da-0306-4c63-8194-27d7c2a827c7",
          "name": "Arroz branco",
          "slug": "arroz-branco",
          "displayName": "Arroz branco",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 360,
            "proteinGPer100g": 7.4,
            "carbsGPer100g": 79,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "321d1271-4d8f-43dd-9daa-60d4afd86652",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "88bc90a2-b93c-4e20-a4e1-bf3276f1d749",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "973aad03-9104-447d-a8c7-f08aaee06f94",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "acf1ae89-c5ed-42e2-bb57-dae5323ce56d",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "ccfb848a-7572-47de-b475-b6408a3505a7",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz branco",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz branco",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "d859904c-09cc-4433-b15b-9e140bc85e16",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
        "ingredient": {
          "id": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
          "name": "Milho verde",
          "slug": "milho-verde",
          "displayName": "Milho verde",
          "aliases": [
            "Milho verde (lata, escorrido)"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "17421647-b5a6-43bf-b922-92c5a4acd69f",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "39fcec64-2a77-4a22-b0d6-38fca6d3caa2",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "e5d84f61-2186-4a1a-a814-5c946d9cb19e",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1 espiga média debulhada",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Milho verde",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Milho verde",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "b82bf851-4d60-429c-9e03-fa16f7e43c07",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "ingredientId": "cdf4f708-e86c-4176-9198-13adc062fd5c",
        "ingredient": {
          "id": "cdf4f708-e86c-4176-9198-13adc062fd5c",
          "name": "Ervilha",
          "slug": "ervilha",
          "displayName": "Ervilha",
          "aliases": [
            "Ervilha (lata, escorrida)"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "7eb3702c-e8c7-4a2b-ac12-3603214d5d29",
              "ingredientId": "cdf4f708-e86c-4176-9198-13adc062fd5c",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "45c9d9d7-6fa0-4634-9605-9d22347c115c",
              "ingredientId": "cdf4f708-e86c-4176-9198-13adc062fd5c",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "f82815c6-f70f-477e-81b7-027a52981da0",
              "ingredientId": "cdf4f708-e86c-4176-9198-13adc062fd5c",
              "measureName": "1 xícara",
              "gramsEquivalent": 160,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Ervilha",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Ervilha",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "cf8f5bb3-bd1b-4c27-ac70-6c8b3faefba1",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "ingredientId": "40000000-0000-0000-0000-000000000009",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000009",
          "name": "Cenoura",
          "slug": "cenoura",
          "displayName": "Cenoura",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 34,
            "proteinGPer100g": 0.7,
            "carbsGPer100g": 7.7,
            "fatGPer100g": 0.3,
            "fiberGPer100g": 2.8,
            "sodiumMgPer100g": 69,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.1,
            "ediblePortionPercent": 91,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "2329ad41-7876-43b3-a0a9-9a457554b5af",
              "ingredientId": "40000000-0000-0000-0000-000000000009",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 60,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2fc7ee52-5e03-4508-87c3-86402446a1ac",
              "ingredientId": "40000000-0000-0000-0000-000000000009",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ca0d714b-ea5c-43ea-8c9b-0a152c1a5885",
              "ingredientId": "40000000-0000-0000-0000-000000000009",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "12d1957a-2456-4fd6-a4b9-a1da1e03f971",
              "ingredientId": "40000000-0000-0000-0000-000000000009",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cenoura",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cenoura",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "bcc68d93-0e9d-428c-9fbc-cc2f379634a6",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "77f20d25-6591-45e4-9435-5e9e76c94c57",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "c212aee9-50e3-4b09-923a-90fbbea9a77c",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 6,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "f2b62297-8377-4858-9666-419f99af1a27",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "stepNumber": 1,
        "instruction": "Rale a cenoura no lado grosso."
      },
      {
        "id": "8cb3338e-f944-4c42-ab26-2dd4b96e9c84",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "stepNumber": 2,
        "instruction": "Refogue o alho no azeite. Acrescente a cenoura ralada e refogue 2 minutos."
      },
      {
        "id": "f7961704-49f0-4991-b712-e041ea8d2e38",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "stepNumber": 3,
        "instruction": "Adicione o arroz, refogue 1–2 minutos."
      },
      {
        "id": "deed1c69-8c75-4a7b-b6c5-424323114f9c",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "stepNumber": 4,
        "instruction": "Acrescente água quente e sal. Cozinhe tampado em fogo baixo por 15 minutos."
      },
      {
        "id": "813ac956-d441-4d94-b727-a752d3999041",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "stepNumber": 5,
        "instruction": "Nos últimos 2 minutos de cozimento, acrescente o milho e a ervilha escorridos por cima do arroz sem mexer. Tampe novamente."
      },
      {
        "id": "b9fad2b6-08ac-4d40-8f17-cd181c2f1886",
        "recipeId": "c6b1b18e-0622-421a-99ab-38e7be223d3d",
        "stepNumber": 6,
        "instruction": "Desligue, descanse 5 minutos e misture delicadamente antes de servir."
      }
    ]
  },
  {
    "id": "d9163f8d-18d5-43c1-b709-11da11353ffe",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz com Lentilha",
    "slug": "arroz-branco-lentilha",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": "/recipe-images/arroz-branco-lentilha.png",
    "imageUrl": "/recipe-images/arroz-branco-lentilha.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 785,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1800,
    "cookingMethod": "Refogado + cozimento tampado",
    "correctionFactor": null,
    "cookingFactor": 2.293,
    "baseYieldNote": "785g de ingredientes medidos rende cerca de 1,8kg de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 2,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 136.4,
      "proteinGPer100g": 4,
      "carbsGPer100g": 27.1,
      "fatGPer100g": 1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 217,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "e3bceab5-4c18-4af3-b6ac-6a811ca33851",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
        "ingredient": {
          "id": "16d123da-0306-4c63-8194-27d7c2a827c7",
          "name": "Arroz branco",
          "slug": "arroz-branco",
          "displayName": "Arroz branco",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 360,
            "proteinGPer100g": 7.4,
            "carbsGPer100g": 79,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "321d1271-4d8f-43dd-9daa-60d4afd86652",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "88bc90a2-b93c-4e20-a4e1-bf3276f1d749",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "973aad03-9104-447d-a8c7-f08aaee06f94",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "acf1ae89-c5ed-42e2-bb57-dae5323ce56d",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "ccfb848a-7572-47de-b475-b6408a3505a7",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz branco",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz branco",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "6acb32d1-f205-4844-acbb-4bc33c307b03",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "ingredientId": "99df11e8-54db-4ed4-9f4e-ab5c5d238f0d",
        "ingredient": {
          "id": "99df11e8-54db-4ed4-9f4e-ab5c5d238f0d",
          "name": "Lentilha",
          "slug": "lentilha",
          "displayName": "Lentilha",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 302,
            "proteinGPer100g": 21.9,
            "carbsGPer100g": 52,
            "fatGPer100g": 1,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "3712d452-da15-43f2-ad2e-12b25cb76ef4",
              "ingredientId": "99df11e8-54db-4ed4-9f4e-ab5c5d238f0d",
              "measureName": "1 concha pequena cozida",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "25f95c8f-f37d-49b3-8218-20718bcd2995",
              "ingredientId": "99df11e8-54db-4ed4-9f4e-ab5c5d238f0d",
              "measureName": "1 concha média cozida",
              "gramsEquivalent": 120,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "01b6e6f8-fe71-4e5d-8210-6ea041f5cc01",
              "ingredientId": "99df11e8-54db-4ed4-9f4e-ab5c5d238f0d",
              "measureName": "1 colher de sopa de lentilha crua",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Lentilha",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 150,
        "quantidade": 150,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Lentilha",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "437ee316-5402-4de3-813b-6a02becd374d",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "3757ff18-67db-42ca-9d78-463bdbe00e51",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "0abf25df-b29d-4985-a125-a6114c0e8745",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "5a133efa-2a7f-468b-8f37-219d4055776e",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, pimenta, cominho",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, pimenta, cominho",
        "notes": null,
        "sortOrder": 5,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "9002cc67-4771-46ad-b2e6-8166b4e837f4",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "stepNumber": 1,
        "instruction": "Pré-cozinhe a lentilha em água sem sal por 15–20 minutos até ficar al dente (não mole). Escorra e reserve."
      },
      {
        "id": "22266342-5ab6-48f3-94b0-0fea6a71b59d",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "stepNumber": 2,
        "instruction": "Refogue a cebola e o alho no azeite até amolecer."
      },
      {
        "id": "d9f7ff65-abd9-40a2-b7be-9362ae43bc7e",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "stepNumber": 3,
        "instruction": "Adicione o arroz e refogue 1–2 minutos. Tempere com cominho e sal."
      },
      {
        "id": "3edee9bb-707a-471f-bcc0-6ff6b28f314e",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "stepNumber": 4,
        "instruction": "Acrescente água quente e cozinhe tampado em fogo baixo por 12 minutos."
      },
      {
        "id": "5d3e03d3-9a18-4310-91e8-3561a8e915e2",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "stepNumber": 5,
        "instruction": "Nos últimos 3 minutos, acrescente a lentilha pré-cozida por cima sem mexer. Tampe novamente."
      },
      {
        "id": "4546b4b3-dd63-4782-b182-957367bb6728",
        "recipeId": "d9163f8d-18d5-43c1-b709-11da11353ffe",
        "stepNumber": 6,
        "instruction": "Desligue, descanse 5 minutos e misture antes de servir."
      }
    ]
  },
  {
    "id": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz com Milho",
    "slug": "arroz-branco-milho",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": "/recipe-images/arroz-branco-milho.png",
    "imageUrl": "/recipe-images/arroz-branco-milho.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 685,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1550,
    "cookingMethod": "Refogado + cozimento tampado",
    "correctionFactor": null,
    "cookingFactor": 2.263,
    "baseYieldNote": "685g de ingredientes medidos rende cerca de 1,6kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 133.1,
      "proteinGPer100g": 2.7,
      "carbsGPer100g": 27.3,
      "fatGPer100g": 1.2,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 218,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "5befbf73-c349-4bf6-a7e2-73f55b78a55d",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
        "ingredient": {
          "id": "16d123da-0306-4c63-8194-27d7c2a827c7",
          "name": "Arroz branco",
          "slug": "arroz-branco",
          "displayName": "Arroz branco",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 360,
            "proteinGPer100g": 7.4,
            "carbsGPer100g": 79,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "321d1271-4d8f-43dd-9daa-60d4afd86652",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "88bc90a2-b93c-4e20-a4e1-bf3276f1d749",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "973aad03-9104-447d-a8c7-f08aaee06f94",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "acf1ae89-c5ed-42e2-bb57-dae5323ce56d",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "ccfb848a-7572-47de-b475-b6408a3505a7",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz branco",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz branco",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "8cc71e51-f854-41ea-a7af-3a926e68f52c",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
        "ingredient": {
          "id": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
          "name": "Milho verde",
          "slug": "milho-verde",
          "displayName": "Milho verde",
          "aliases": [
            "Milho verde (lata, escorrido)"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "17421647-b5a6-43bf-b922-92c5a4acd69f",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 20,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "39fcec64-2a77-4a22-b0d6-38fca6d3caa2",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "e5d84f61-2186-4a1a-a814-5c946d9cb19e",
              "ingredientId": "bbca0e62-5f8c-4734-9b45-c9ccafad7307",
              "measureName": "1 espiga média debulhada",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Milho verde",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 150,
        "quantidade": 150,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Milho verde",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "47ee1e2e-f7e8-4ee1-aa06-3e7f7879f760",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "adf1130b-9888-42c5-8129-00bfdafb3a00",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "2a47f465-b202-4813-a6cc-ed142f6da3c8",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "59a06d06-9b6c-469f-ba93-c73791849d6f",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "stepNumber": 1,
        "instruction": "Refogue o alho no azeite. Adicione o arroz e refogue 1–2 minutos."
      },
      {
        "id": "41ac24a5-63c1-463d-bd90-5cd48f513391",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "stepNumber": 2,
        "instruction": "Acrescente água quente e sal. Cozinhe tampado em fogo baixo por 13 minutos."
      },
      {
        "id": "4970eca9-385d-4662-84d1-dc8c6714fa06",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "stepNumber": 3,
        "instruction": "Nos últimos 2 minutos, acrescente o milho escorrido sem mexer e tampe novamente."
      },
      {
        "id": "f2820409-ec88-49b6-9cd0-236cfb24c66a",
        "recipeId": "2f84cf91-9f1c-4820-9d1b-301ee64df81c",
        "stepNumber": 4,
        "instruction": "Desligue, descanse 5 minutos e misture antes de servir."
      }
    ]
  },
  {
    "id": "099eec12-56cf-4ac0-9211-a3108ff172b1",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz Integral",
    "slug": "arroz-integral",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": "/recipe-images/arroz-integral.png",
    "imageUrl": "/recipe-images/arroz-integral.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 535,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1350,
    "cookingMethod": "Refogado + cozimento tampado",
    "correctionFactor": null,
    "cookingFactor": 2.523,
    "baseYieldNote": "535g de ingredientes medidos rende cerca de 1,4kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 144.6,
      "proteinGPer100g": 3,
      "carbsGPer100g": 29,
      "fatGPer100g": 1.8,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 219,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "37504e50-2f04-4c94-9bbd-71b5aa16e214",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "ingredientId": "314d7f30-b05c-46f3-850c-0458146e8ab6",
        "ingredient": {
          "id": "314d7f30-b05c-46f3-850c-0458146e8ab6",
          "name": "Arroz integral",
          "slug": "arroz-integral",
          "displayName": "Arroz integral",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 358,
            "proteinGPer100g": 7.8,
            "carbsGPer100g": 77,
            "fatGPer100g": 1.8,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "4d6d6e41-a7f2-48db-9088-9d6ccb9bf95f",
              "ingredientId": "314d7f30-b05c-46f3-850c-0458146e8ab6",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7ae1b263-f9ce-4e25-8a45-71dbf7cb5415",
              "ingredientId": "314d7f30-b05c-46f3-850c-0458146e8ab6",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "34631300-fcab-4990-8fe3-69a9f6f39af3",
              "ingredientId": "314d7f30-b05c-46f3-850c-0458146e8ab6",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "79734a24-17b4-4159-9631-ba33d9f9b51e",
              "ingredientId": "314d7f30-b05c-46f3-850c-0458146e8ab6",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "0af446ec-b34e-4b01-8220-d16fd31fab9e",
              "ingredientId": "314d7f30-b05c-46f3-850c-0458146e8ab6",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz integral",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz integral",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "f6577c2c-1106-43d0-a955-ddf9063daa9d",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "cbada603-a256-4c50-a049-ef4da6b79732",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "ec454960-8df0-4a3a-a575-2872bc7691ee",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "a78388c0-d9cb-4b03-b5f4-aa9db113008c",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "stepNumber": 1,
        "instruction": "Se possível, deixe o arroz de molho em água por 8–12 horas. Escorra antes de usar."
      },
      {
        "id": "046569ba-2bc8-470c-8bf4-4a7844a92a30",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "stepNumber": 2,
        "instruction": "Refogue o alho no azeite. Acrescente o arroz e refogue 2 minutos."
      },
      {
        "id": "5d7ef8dd-6bf4-473e-ac33-c0e454a02a4b",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "stepNumber": 3,
        "instruction": "Adicione água quente na proporção 1:2 (1.000ml para 500g de arroz), sal e tampe."
      },
      {
        "id": "6257667f-afe8-4987-907a-31589c8b451f",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "stepNumber": 4,
        "instruction": "Cozinhe em fogo baixo por 35–40 minutos (sem molho, 25–30 minutos se deixou de molho)."
      },
      {
        "id": "8da0cfc1-2f9b-422f-a57a-f4b1a4a02fa9",
        "recipeId": "099eec12-56cf-4ac0-9211-a3108ff172b1",
        "stepNumber": 5,
        "instruction": "Desligue e descanse tampado por 10 minutos antes de soltar com garfo."
      }
    ]
  },
  {
    "id": "a4839b3f-637f-4cfe-a0f8-b2aeac2c47f1",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Batata Doce Assada",
    "slug": "batata-doce-assada",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "batata",
    "status": "published",
    "imagePath": "/recipe-images/batata-doce-assada.png",
    "imageUrl": "/recipe-images/batata-doce-assada.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1010,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 780,
    "cookingMethod": "Forno ou airfryer",
    "correctionFactor": null,
    "cookingFactor": 0.772,
    "baseYieldNote": "1kg de ingredientes medidos rende cerca de 780g de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 110.1,
      "proteinGPer100g": 2.1,
      "carbsGPer100g": 23.1,
      "fatGPer100g": 1.4,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 220,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "98aa1879-2d18-4b5a-becd-e1a185ff7dfd",
        "name": "Batata",
        "slug": "batata"
      }
    ],
    "ingredients": [
      {
        "id": "297bcbff-bbd3-4c11-bd86-fc8e5fd85b35",
        "recipeId": "a4839b3f-637f-4cfe-a0f8-b2aeac2c47f1",
        "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
        "ingredient": {
          "id": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
          "name": "Batata doce",
          "slug": "batata-doce",
          "displayName": "Batata doce",
          "aliases": [
            "Batata doce (com casca)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "38da8649-439a-465e-a31a-c6c13ee05186",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "90f4317c-68d5-4641-8bbe-21094793452e",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "06d37a6d-dce7-4233-90e7-fa721aa754d5",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 220,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "a47864dd-68cd-45c3-9786-449b828dd199",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Batata doce",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Batata doce",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "0d090479-17b7-40e3-8901-06db9bcfc937",
        "recipeId": "a4839b3f-637f-4cfe-a0f8-b2aeac2c47f1",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e96cebc2-7c50-464a-ae83-4c1b9e24b6b5",
        "recipeId": "a4839b3f-637f-4cfe-a0f8-b2aeac2c47f1",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "cc4201d3-49cf-4ed3-8b84-a91ab57352ea",
        "recipeId": "a4839b3f-637f-4cfe-a0f8-b2aeac2c47f1",
        "stepNumber": 1,
        "instruction": "Lave bem as batatas. Corte ao meio no sentido do comprimento ou em rodelas de ~1,5cm."
      },
      {
        "id": "744843ae-131a-4188-87e7-a97ec00df99f",
        "recipeId": "a4839b3f-637f-4cfe-a0f8-b2aeac2c47f1",
        "stepNumber": 2,
        "instruction": "Tempere com sal e azeite, distribuindo bem."
      },
      {
        "id": "fa09f0e6-8277-4055-84b0-7500b401a58e",
        "recipeId": "a4839b3f-637f-4cfe-a0f8-b2aeac2c47f1",
        "stepNumber": 3,
        "instruction": "Forno: 200°C por 35–40 minutos, virando na metade. Airfryer: 180°C por 20–25 minutos, virando na metade."
      },
      {
        "id": "64e6668b-ba5b-4fdb-9ad5-da5c2c655bef",
        "recipeId": "a4839b3f-637f-4cfe-a0f8-b2aeac2c47f1",
        "stepNumber": 4,
        "instruction": "Está pronta quando a casca dourar e um garfo entrar sem resistência."
      }
    ]
  },
  {
    "id": "9c74a108-03c9-43f4-9ac0-027897bc5f03",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Batata Doce Cozida",
    "slug": "batata-doce-cozida",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "batata",
    "status": "published",
    "imagePath": "/recipe-images/batata-doce-cozida.png",
    "imageUrl": "/recipe-images/batata-doce-cozida.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1000,
    "cookingMethod": "Cozimento em água",
    "correctionFactor": null,
    "cookingFactor": 1,
    "baseYieldNote": "1kg de ingredientes medidos rende cerca de 1kg de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 77,
      "proteinGPer100g": 1.6,
      "carbsGPer100g": 18,
      "fatGPer100g": 0.1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 221,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "98aa1879-2d18-4b5a-becd-e1a185ff7dfd",
        "name": "Batata",
        "slug": "batata"
      }
    ],
    "ingredients": [
      {
        "id": "a7002738-057e-4e70-a0a5-58d88be3a10c",
        "recipeId": "9c74a108-03c9-43f4-9ac0-027897bc5f03",
        "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
        "ingredient": {
          "id": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
          "name": "Batata doce",
          "slug": "batata-doce",
          "displayName": "Batata doce",
          "aliases": [
            "Batata doce (com casca)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "38da8649-439a-465e-a31a-c6c13ee05186",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "90f4317c-68d5-4641-8bbe-21094793452e",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "06d37a6d-dce7-4233-90e7-fa721aa754d5",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 220,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "a47864dd-68cd-45c3-9786-449b828dd199",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Batata doce",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Batata doce",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "29116c78-e8c4-4e6a-b097-05a0adf26492",
        "recipeId": "9c74a108-03c9-43f4-9ac0-027897bc5f03",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "adfa52c3-592f-4551-ac18-a708f21a9740",
        "recipeId": "9c74a108-03c9-43f4-9ac0-027897bc5f03",
        "stepNumber": 1,
        "instruction": "Lave as batatas. Cozinhe com casca em água com sal por 25–30 minutos até ficarem macias."
      },
      {
        "id": "75077e2a-8ac7-441d-9440-c324e35d099b",
        "recipeId": "9c74a108-03c9-43f4-9ac0-027897bc5f03",
        "stepNumber": 2,
        "instruction": "Escorra, deixe esfriar levemente e descasque se preferir. A casca sai com facilidade após o cozimento."
      }
    ]
  },
  {
    "id": "6ffb0bff-22e2-4c55-a728-7edba9f9cdca",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Batata Inglesa Assada",
    "slug": "batata-inglesa-assada",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "batata",
    "status": "published",
    "imagePath": "/recipe-images/batata-inglesa-assada.png",
    "imageUrl": "/recipe-images/batata-inglesa-assada.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1010,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 780,
    "cookingMethod": "Forno ou airfryer",
    "correctionFactor": null,
    "cookingFactor": 0.772,
    "baseYieldNote": "1kg de ingredientes medidos rende cerca de 780g de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 83.1,
      "proteinGPer100g": 2.3,
      "carbsGPer100g": 15.4,
      "fatGPer100g": 1.4,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 222,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "98aa1879-2d18-4b5a-becd-e1a185ff7dfd",
        "name": "Batata",
        "slug": "batata"
      }
    ],
    "ingredients": [
      {
        "id": "a057d5ae-254e-4bb9-990d-7a2f5fd3ebfa",
        "recipeId": "6ffb0bff-22e2-4c55-a728-7edba9f9cdca",
        "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
        "ingredient": {
          "id": "c64d9347-842f-4637-b70a-10e840439194",
          "name": "Batata inglesa",
          "slug": "batata-inglesa",
          "displayName": "Batata inglesa",
          "aliases": [
            "Batata inglesa (com casca)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "d08f410d-c609-4967-a3db-93d215f1406e",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "cd5631b3-874a-4403-af95-5cd119032a03",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "4c1c2ba7-e64a-47c1-be0c-5c40477fc8ba",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 220,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "fe0258b7-e0ba-475d-a36b-fc4a89000196",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 85,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Batata inglesa",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Batata inglesa",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "df02d6f3-58cf-4f5f-8e58-5d2d0c3daa43",
        "recipeId": "6ffb0bff-22e2-4c55-a728-7edba9f9cdca",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "667b3f30-0f97-40b9-9fbd-f9f2b5e988f9",
        "recipeId": "6ffb0bff-22e2-4c55-a728-7edba9f9cdca",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "25d7b561-26e2-4611-8dc6-46a641602797",
        "recipeId": "6ffb0bff-22e2-4c55-a728-7edba9f9cdca",
        "stepNumber": 1,
        "instruction": "Lave as batatas. Corte em cubos grandes ou em rodelas de ~1,5cm."
      },
      {
        "id": "c711baa8-58d9-4a9a-9504-46a03c370c96",
        "recipeId": "6ffb0bff-22e2-4c55-a728-7edba9f9cdca",
        "stepNumber": 2,
        "instruction": "Tempere com sal e azeite."
      },
      {
        "id": "03c15f99-45d7-4397-9d4b-2b52f845aa01",
        "recipeId": "6ffb0bff-22e2-4c55-a728-7edba9f9cdca",
        "stepNumber": 3,
        "instruction": "Forno: 200°C por 35–40 minutos, virando na metade. Airfryer: 180°C por 20–25 minutos."
      },
      {
        "id": "f7d7e127-d6e0-47b5-a5d8-42992a787a33",
        "recipeId": "6ffb0bff-22e2-4c55-a728-7edba9f9cdca",
        "stepNumber": 4,
        "instruction": "Está pronta quando dourada por fora e macia por dentro."
      }
    ]
  },
  {
    "id": "eeb0075b-5053-4705-8b39-a1d61fcee925",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Batata Inglesa Cozida",
    "slug": "batata-inglesa-cozida",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "batata",
    "status": "published",
    "imagePath": "/recipe-images/batata-inglesa-cozida.png",
    "imageUrl": "/recipe-images/batata-inglesa-cozida.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1000,
    "cookingMethod": "Cozimento em água",
    "correctionFactor": null,
    "cookingFactor": 1,
    "baseYieldNote": "1kg de ingredientes medidos rende cerca de 1kg de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 56,
      "proteinGPer100g": 1.8,
      "carbsGPer100g": 12,
      "fatGPer100g": 0.1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 223,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "98aa1879-2d18-4b5a-becd-e1a185ff7dfd",
        "name": "Batata",
        "slug": "batata"
      }
    ],
    "ingredients": [
      {
        "id": "3f49a5eb-94f9-451a-9afa-9830b72f0298",
        "recipeId": "eeb0075b-5053-4705-8b39-a1d61fcee925",
        "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
        "ingredient": {
          "id": "c64d9347-842f-4637-b70a-10e840439194",
          "name": "Batata inglesa",
          "slug": "batata-inglesa",
          "displayName": "Batata inglesa",
          "aliases": [
            "Batata inglesa (com casca)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "d08f410d-c609-4967-a3db-93d215f1406e",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "cd5631b3-874a-4403-af95-5cd119032a03",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "4c1c2ba7-e64a-47c1-be0c-5c40477fc8ba",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 220,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "fe0258b7-e0ba-475d-a36b-fc4a89000196",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 85,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Batata inglesa",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Batata inglesa",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e3565b55-8d09-46ba-a44b-21022fe730a2",
        "recipeId": "eeb0075b-5053-4705-8b39-a1d61fcee925",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "781dc539-d0ae-4485-9780-588c55713255",
        "recipeId": "eeb0075b-5053-4705-8b39-a1d61fcee925",
        "stepNumber": 1,
        "instruction": "Descasque as batatas e corte em cubos médios."
      },
      {
        "id": "726f430e-5499-4099-b374-0f5eb6fa9507",
        "recipeId": "eeb0075b-5053-4705-8b39-a1d61fcee925",
        "stepNumber": 2,
        "instruction": "Cozinhe em água com sal por 20–25 minutos até ficarem macias. Escorra bem antes de servir."
      }
    ]
  },
  {
    "id": "ac2cea1c-91ef-403c-8c6b-9c1585b8df82",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Macarrão",
    "slug": "macarrao-cozido",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "massa",
    "status": "published",
    "imagePath": "/recipe-images/macarrao-cozido.png",
    "imageUrl": "/recipe-images/macarrao-cozido.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 500,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1250,
    "cookingMethod": "Cozimento em água",
    "correctionFactor": null,
    "cookingFactor": 2.5,
    "baseYieldNote": "500g de ingredientes medidos rende cerca de 1,3kg de preparo pronto.",
    "prepTimeMinutes": 15,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 148,
      "proteinGPer100g": 5,
      "carbsGPer100g": 29.6,
      "fatGPer100g": 0.7,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 225,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "8403c0b5-678f-461c-b20f-ec6118830b78",
        "name": "Massa",
        "slug": "massa"
      }
    ],
    "ingredients": [
      {
        "id": "d2f25109-669d-4190-8ea6-1bd064edac51",
        "recipeId": "ac2cea1c-91ef-403c-8c6b-9c1585b8df82",
        "ingredientId": "b8063aa3-8e4e-4af7-960c-62f4afe720d6",
        "ingredient": {
          "id": "b8063aa3-8e4e-4af7-960c-62f4afe720d6",
          "name": "Macarrão",
          "slug": "macarrao",
          "displayName": "Macarrão",
          "aliases": [
            "Macarrão (tipo espaguete, penne ou fusilli)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "a41ac46b-f33f-4c4b-940d-0fbb7758f2fd",
              "ingredientId": "b8063aa3-8e4e-4af7-960c-62f4afe720d6",
              "measureName": "1 pegador de macarrão cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "08577cc2-b874-4fc7-8b09-7cc40622ff81",
              "ingredientId": "b8063aa3-8e4e-4af7-960c-62f4afe720d6",
              "measureName": "1 xícara de macarrão cozido",
              "gramsEquivalent": 140,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "eafba958-9fb7-4561-abcc-694ee3bfa6d5",
              "ingredientId": "b8063aa3-8e4e-4af7-960c-62f4afe720d6",
              "measureName": "1 xícara de macarrão cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Macarrão",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Macarrão",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "9f1e026f-d4b9-42d9-8d9e-5cf599aa5beb",
        "recipeId": "ac2cea1c-91ef-403c-8c6b-9c1585b8df82",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "185c3fc0-88ef-468f-9775-5f464fce8f25",
        "recipeId": "ac2cea1c-91ef-403c-8c6b-9c1585b8df82",
        "stepNumber": 1,
        "instruction": "Ferva água abundante com sal generoso (a água deve ter sabor)."
      },
      {
        "id": "d89f8e2f-e023-4573-88c0-d7bc9b0fe6e7",
        "recipeId": "ac2cea1c-91ef-403c-8c6b-9c1585b8df82",
        "stepNumber": 2,
        "instruction": "Cozinhe o macarrão pelo tempo indicado na embalagem (geralmente 8–12 minutos para al dente)."
      },
      {
        "id": "6dc204fd-ca25-4029-8303-2d974ae6eb69",
        "recipeId": "ac2cea1c-91ef-403c-8c6b-9c1585b8df82",
        "stepNumber": 3,
        "instruction": "Escorra e sirva com o acompanhamento desejado."
      }
    ]
  },
  {
    "id": "d38e9126-d2bc-42b0-bf8c-8bbeb9d5ecf1",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Mandioca Cozida",
    "slug": "mandioca-cozida",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "mandioca",
    "status": "published",
    "imagePath": "/recipe-images/mandioca-cozida.png",
    "imageUrl": "/recipe-images/mandioca-cozida.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1000,
    "cookingMethod": "Cozimento em água",
    "correctionFactor": null,
    "cookingFactor": 1,
    "baseYieldNote": "1kg de ingredientes medidos rende cerca de 1kg de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 125,
      "proteinGPer100g": 0.6,
      "carbsGPer100g": 30,
      "fatGPer100g": 0.3,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 226,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "5c931a9b-0892-480d-99b5-87a1504afe8b",
        "name": "Mandioca",
        "slug": "mandioca"
      }
    ],
    "ingredients": [
      {
        "id": "21edc3ec-7bd2-4502-bcdf-6148130f2e0c",
        "recipeId": "d38e9126-d2bc-42b0-bf8c-8bbeb9d5ecf1",
        "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
        "ingredient": {
          "id": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
          "name": "Mandioca",
          "slug": "mandioca",
          "displayName": "Mandioca",
          "aliases": [
            "Mandioca (descascada)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 125,
            "proteinGPer100g": 0.6,
            "carbsGPer100g": 30,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "a9f132d5-8b99-4f5c-b34e-df9d7a1fab8a",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 pedaço pequeno cozido",
              "gramsEquivalent": 60,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "e9dc49dc-c7b2-446b-abf2-fa3e430fd3f7",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 pedaço médio cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "d05692eb-31dc-4fec-bffb-9cf90f27e343",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Mandioca",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Mandioca",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "f885082d-ea33-4eef-adba-14fc28d193a3",
        "recipeId": "d38e9126-d2bc-42b0-bf8c-8bbeb9d5ecf1",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "82b5b638-5f2b-4a7e-be29-53dd4b75bc10",
        "recipeId": "d38e9126-d2bc-42b0-bf8c-8bbeb9d5ecf1",
        "stepNumber": 1,
        "instruction": "Descasque a mandioca, corte em pedaços de ~8cm e retire o fio central (fibroso)."
      },
      {
        "id": "efd148a5-6efe-4635-b23a-38287e12e9f2",
        "recipeId": "d38e9126-d2bc-42b0-bf8c-8bbeb9d5ecf1",
        "stepNumber": 2,
        "instruction": "Leve ao fogo em água com sal. Cozinhe por 25–35 minutos até ficar completamente macia — deve desmanchar facilmente com o garfo."
      },
      {
        "id": "6de44a89-90d0-4646-9f10-6d6bef4aa0b8",
        "recipeId": "d38e9126-d2bc-42b0-bf8c-8bbeb9d5ecf1",
        "stepNumber": 3,
        "instruction": "Escorra e sirva."
      }
    ]
  },
  {
    "id": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Purê de Batata Inglesa",
    "slug": "pure-batata-inglesa",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "batata",
    "status": "published",
    "imagePath": "/recipe-images/pure-batata-inglesa.png",
    "imageUrl": "/recipe-images/pure-batata-inglesa.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1165,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1100,
    "cookingMethod": "Cozimento + amassamento",
    "correctionFactor": null,
    "cookingFactor": 0.944,
    "baseYieldNote": "1,2kg de ingredientes medidos rende cerca de 1,1kg de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 3,
    "practicalityLevel": 3,
    "versatilityLevel": 2,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 69.1,
      "proteinGPer100g": 2.1,
      "carbsGPer100g": 11.6,
      "fatGPer100g": 1.7,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 227,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "98aa1879-2d18-4b5a-becd-e1a185ff7dfd",
        "name": "Batata",
        "slug": "batata"
      }
    ],
    "ingredients": [
      {
        "id": "f275716e-6c46-41e5-8e9a-2fa42a1757fe",
        "recipeId": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
        "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
        "ingredient": {
          "id": "c64d9347-842f-4637-b70a-10e840439194",
          "name": "Batata inglesa",
          "slug": "batata-inglesa",
          "displayName": "Batata inglesa",
          "aliases": [
            "Batata inglesa (com casca)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "d08f410d-c609-4967-a3db-93d215f1406e",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "cd5631b3-874a-4403-af95-5cd119032a03",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "4c1c2ba7-e64a-47c1-be0c-5c40477fc8ba",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 220,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "fe0258b7-e0ba-475d-a36b-fc4a89000196",
              "ingredientId": "c64d9347-842f-4637-b70a-10e840439194",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 85,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Batata inglesa",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Batata inglesa",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "ddd4f7a6-4d27-494c-988b-b94169c7c465",
        "recipeId": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
        "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
        "ingredient": {
          "id": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
          "name": "Leite integral",
          "slug": "leite-integral",
          "displayName": "Leite integral",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "ml",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 61,
            "proteinGPer100g": 3,
            "carbsGPer100g": 4.7,
            "fatGPer100g": 3.4,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": null
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "547034d7-2b72-40fa-942b-116ce249c4a3",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": 15,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "df7736f3-82b5-47f0-b406-85cc5fe611e3",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 120,
              "mlEquivalent": 120,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "a3d6f451-9537-45a4-9c73-49985df1b673",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1 xícara",
              "gramsEquivalent": 240,
              "mlEquivalent": 240,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Leite integral",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 150,
        "quantidade": 150,
        "unit": "ml",
        "unidade": "ml",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Leite integral",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "ce1297af-a7f1-4fe3-a7e6-d1cf3512aeb9",
        "recipeId": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
        "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
        "ingredient": {
          "id": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
          "name": "Manteiga",
          "slug": "manteiga",
          "displayName": "Manteiga",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 726,
            "proteinGPer100g": 0.4,
            "carbsGPer100g": 0,
            "fatGPer100g": 82.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "b51a454d-3545-42c2-bee6-65cf0fa74996",
              "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "6aae5796-f5cd-4743-a182-0a0ea17c1122",
              "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 14,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Manteiga",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Manteiga",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "38a3c836-7746-4664-8baa-2fb8042ff2c1",
        "recipeId": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, noz-moscada",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, noz-moscada",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "5f85c375-1e1b-4a70-b60b-3a9f03444395",
        "recipeId": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
        "stepNumber": 1,
        "instruction": "Cozinhe as batatas descascadas em água com sal até ficarem bem macias. Escorra totalmente."
      },
      {
        "id": "23e71723-0662-4db4-9cac-71e7e8cb9ac8",
        "recipeId": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
        "stepNumber": 2,
        "instruction": "Passe pelo espremedor ainda quente. Não use liquidificador nem processador."
      },
      {
        "id": "154aa49c-f75d-4b12-8e2c-3678e7a76bef",
        "recipeId": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
        "stepNumber": 3,
        "instruction": "Acrescente a manteiga e incorpore. Adicione o leite aquecido aos poucos, mexendo até a consistência ficar cremosa."
      },
      {
        "id": "6dff1542-3fa9-48a6-993c-f7f4ec543ae9",
        "recipeId": "2bb200ce-6cd6-4e68-8860-f3fdd5aa8ea1",
        "stepNumber": 4,
        "instruction": "Finalize com noz-moscada ralada e ajuste o sal."
      }
    ]
  },
  {
    "id": "715fb206-f0d9-4a49-98cc-06249656d787",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Purê de Inhame",
    "slug": "pure-inhame",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "pure",
    "status": "published",
    "imagePath": "/recipe-images/pure-inhame.png",
    "imageUrl": "/recipe-images/pure-inhame.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1110,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1050,
    "cookingMethod": "Cozimento + amassamento",
    "correctionFactor": null,
    "cookingFactor": 0.946,
    "baseYieldNote": "1,1kg de ingredientes medidos rende cerca de 1,1kg de preparo pronto.",
    "prepTimeMinutes": 35,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 3,
    "practicalityLevel": 3,
    "versatilityLevel": 2,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 106.1,
      "proteinGPer100g": 1.7,
      "carbsGPer100g": 23.3,
      "fatGPer100g": 1.3,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 228,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "277667d4-8649-4401-b6ae-c6ba06b4efed",
        "name": "Purê",
        "slug": "pure"
      }
    ],
    "ingredients": [
      {
        "id": "a1bfac0c-8571-4b90-ba94-272ecfd3fa63",
        "recipeId": "715fb206-f0d9-4a49-98cc-06249656d787",
        "ingredientId": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
        "ingredient": {
          "id": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
          "name": "Inhame",
          "slug": "inhame",
          "displayName": "Inhame",
          "aliases": [
            "Inhame (descascado)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 98,
            "proteinGPer100g": 1.5,
            "carbsGPer100g": 24,
            "fatGPer100g": 0.2,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "7b4f1e88-867d-49e4-b393-c96c5058226c",
              "ingredientId": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7c453078-c90e-4701-a281-e643ca7b5c0f",
              "ingredientId": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "a93fb56c-8dc7-4002-9b0f-6baa17113543",
              "ingredientId": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
              "measureName": "1 colher de servir cozido",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Inhame",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Inhame",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "223f850b-e5dc-44df-aa85-678e8baa7ebe",
        "recipeId": "715fb206-f0d9-4a49-98cc-06249656d787",
        "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
        "ingredient": {
          "id": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
          "name": "Leite integral",
          "slug": "leite-integral",
          "displayName": "Leite integral",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "ml",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 61,
            "proteinGPer100g": 3,
            "carbsGPer100g": 4.7,
            "fatGPer100g": 3.4,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": null
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "547034d7-2b72-40fa-942b-116ce249c4a3",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": 15,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "df7736f3-82b5-47f0-b406-85cc5fe611e3",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 120,
              "mlEquivalent": 120,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "a3d6f451-9537-45a4-9c73-49985df1b673",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1 xícara",
              "gramsEquivalent": 240,
              "mlEquivalent": 240,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Leite integral",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "ml",
        "unidade": "ml",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Leite integral",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "3ca9fccf-8a34-42b1-94b9-9d8ccb922b9e",
        "recipeId": "715fb206-f0d9-4a49-98cc-06249656d787",
        "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
        "ingredient": {
          "id": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
          "name": "Manteiga",
          "slug": "manteiga",
          "displayName": "Manteiga",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 726,
            "proteinGPer100g": 0.4,
            "carbsGPer100g": 0,
            "fatGPer100g": 82.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "b51a454d-3545-42c2-bee6-65cf0fa74996",
              "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "6aae5796-f5cd-4743-a182-0a0ea17c1122",
              "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 14,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Manteiga",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Manteiga",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "832999ee-893f-474e-8eb3-855f1879500c",
        "recipeId": "715fb206-f0d9-4a49-98cc-06249656d787",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "b7e1f23e-bdf2-4e5c-b2d6-5cc94e9eca37",
        "recipeId": "715fb206-f0d9-4a49-98cc-06249656d787",
        "stepNumber": 1,
        "instruction": "Cozinhe o inhame descascado em água com sal até ficar bem macio. Escorra e esprema ainda quente."
      },
      {
        "id": "540a7b2b-a014-4404-8aa3-0ec0dbad28fc",
        "recipeId": "715fb206-f0d9-4a49-98cc-06249656d787",
        "stepNumber": 2,
        "instruction": "A mucilagem do inhame dá ao purê uma textura naturalmente cremosa — aproveite isso."
      },
      {
        "id": "3ead216a-c9d5-4d5a-9d74-257b78ee4271",
        "recipeId": "715fb206-f0d9-4a49-98cc-06249656d787",
        "stepNumber": 3,
        "instruction": "Incorpore a manteiga e adicione o leite aquecido aos poucos até a consistência desejada. Ajuste o sal."
      }
    ]
  },
  {
    "id": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Purê de Mandioca",
    "slug": "pure-mandioca",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "pure",
    "status": "published",
    "imagePath": "/recipe-images/pure-mandioca.png",
    "imageUrl": "/recipe-images/pure-mandioca.png",
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1165,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1100,
    "cookingMethod": "Cozimento + amassamento",
    "correctionFactor": null,
    "cookingFactor": 0.944,
    "baseYieldNote": "1,2kg de ingredientes medidos rende cerca de 1,1kg de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 3,
    "practicalityLevel": 3,
    "versatilityLevel": 2,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 131.8,
      "proteinGPer100g": 1,
      "carbsGPer100g": 27.9,
      "fatGPer100g": 1.9,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 229,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "277667d4-8649-4401-b6ae-c6ba06b4efed",
        "name": "Purê",
        "slug": "pure"
      }
    ],
    "ingredients": [
      {
        "id": "f74da3e2-ccc3-4749-8f1d-a0184a3e50c5",
        "recipeId": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
        "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
        "ingredient": {
          "id": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
          "name": "Mandioca",
          "slug": "mandioca",
          "displayName": "Mandioca",
          "aliases": [
            "Mandioca (descascada)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 125,
            "proteinGPer100g": 0.6,
            "carbsGPer100g": 30,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "a9f132d5-8b99-4f5c-b34e-df9d7a1fab8a",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 pedaço pequeno cozido",
              "gramsEquivalent": 60,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "e9dc49dc-c7b2-446b-abf2-fa3e430fd3f7",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 pedaço médio cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "d05692eb-31dc-4fec-bffb-9cf90f27e343",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Mandioca",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Mandioca",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "fe402642-bbd4-449b-b057-7f86a7fa6c95",
        "recipeId": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
        "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
        "ingredient": {
          "id": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
          "name": "Leite integral",
          "slug": "leite-integral",
          "displayName": "Leite integral",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "ml",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 61,
            "proteinGPer100g": 3,
            "carbsGPer100g": 4.7,
            "fatGPer100g": 3.4,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": null
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "547034d7-2b72-40fa-942b-116ce249c4a3",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": 15,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "df7736f3-82b5-47f0-b406-85cc5fe611e3",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 120,
              "mlEquivalent": 120,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "a3d6f451-9537-45a4-9c73-49985df1b673",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1 xícara",
              "gramsEquivalent": 240,
              "mlEquivalent": 240,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Leite integral",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 150,
        "quantidade": 150,
        "unit": "ml",
        "unidade": "ml",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Leite integral",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "30aaee10-b483-4311-bf52-d74b2654a67a",
        "recipeId": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
        "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
        "ingredient": {
          "id": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
          "name": "Manteiga",
          "slug": "manteiga",
          "displayName": "Manteiga",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 726,
            "proteinGPer100g": 0.4,
            "carbsGPer100g": 0,
            "fatGPer100g": 82.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "b51a454d-3545-42c2-bee6-65cf0fa74996",
              "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "6aae5796-f5cd-4743-a182-0a0ea17c1122",
              "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 14,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Manteiga",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Manteiga",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "85c97e69-f96b-40f5-ac47-c03f883a2664",
        "recipeId": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "28d519a0-a465-42ee-974f-d5f3f80a4a77",
        "recipeId": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
        "stepNumber": 1,
        "instruction": "Cozinhe a mandioca descascada (sem o fio central) em água com sal até desmanchar. Escorra."
      },
      {
        "id": "be882e6b-8243-4d7f-9c74-73cc34e66493",
        "recipeId": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
        "stepNumber": 2,
        "instruction": "Enquanto quente, amasse com garfo ou espremedor. O purê de mandioca fica naturalmente mais elástico que o de batata — é normal."
      },
      {
        "id": "8c61943c-9281-4329-babf-db75d6c3d6b0",
        "recipeId": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
        "stepNumber": 3,
        "instruction": "Incorpore a manteiga. Adicione o leite aquecido aos poucos até a consistência desejada."
      },
      {
        "id": "3831508d-182a-4dea-86fd-0d7057f8ea10",
        "recipeId": "1aeafd21-bb77-4bb6-944f-54dc8ea18790",
        "stepNumber": 4,
        "instruction": "Ajuste o sal e sirva imediatamente."
      }
    ]
  },
  {
    "id": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz com Talo de Couve",
    "slug": "arroz-com-talo-de-couve",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 635,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1500,
    "cookingMethod": "Refogado + cozimento tampado",
    "correctionFactor": null,
    "cookingFactor": 2.362,
    "baseYieldNote": "635g de ingredientes medidos rende cerca de 1,5kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 133.7,
      "proteinGPer100g": 2.8,
      "carbsGPer100g": 27.2,
      "fatGPer100g": 1.2,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 230,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "fe5f2179-0cab-4a68-ae1f-2421b319b5a9",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
        "ingredient": {
          "id": "16d123da-0306-4c63-8194-27d7c2a827c7",
          "name": "Arroz branco",
          "slug": "arroz-branco",
          "displayName": "Arroz branco",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 360,
            "proteinGPer100g": 7.4,
            "carbsGPer100g": 79,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "321d1271-4d8f-43dd-9daa-60d4afd86652",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "88bc90a2-b93c-4e20-a4e1-bf3276f1d749",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "973aad03-9104-447d-a8c7-f08aaee06f94",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "acf1ae89-c5ed-42e2-bb57-dae5323ce56d",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "ccfb848a-7572-47de-b475-b6408a3505a7",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz branco",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz branco",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "0d29f271-be54-460b-9244-910fa6764037",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "ingredientId": "61800c19-3e3b-4b11-9154-6017eab93c74",
        "ingredient": {
          "id": "61800c19-3e3b-4b11-9154-6017eab93c74",
          "name": "Talo de couve",
          "slug": "talo-de-couve",
          "displayName": "Talo de couve",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 43,
            "proteinGPer100g": 3.1,
            "carbsGPer100g": 7,
            "fatGPer100g": 0.7,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "a97f4f90-1f81-42ad-9161-3bec93fc480a",
              "ingredientId": "61800c19-3e3b-4b11-9154-6017eab93c74",
              "measureName": "1 colher de sopa picado",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "c805a004-6dd9-44b9-ad60-5408b44db506",
              "ingredientId": "61800c19-3e3b-4b11-9154-6017eab93c74",
              "measureName": "1/2 xícara picado",
              "gramsEquivalent": 45,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Talo de couve",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Talo de couve",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "50a47e04-e699-4cc8-8480-4f01962c7438",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "bf83f096-bb4a-4ecc-9d9f-87508ff7c887",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "7a7e0910-d9fa-4a24-ba49-306feea444b8",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "5a33ec1d-41c4-4948-9cd1-78d38c0295dc",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "stepNumber": 1,
        "instruction": "Lave os talos de couve e corte em rodelas finas (~3mm)."
      },
      {
        "id": "11184d24-6dba-4eb8-9998-157d0efff364",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "stepNumber": 2,
        "instruction": "Refogue o alho no azeite. Acrescente os talos picados e refogue por 2 minutos."
      },
      {
        "id": "7286e252-3300-4588-8403-11df7ea5d4ec",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "stepNumber": 3,
        "instruction": "Adicione o arroz e refogue 1–2 minutos. Acrescente água quente e sal."
      },
      {
        "id": "a8d0ab6e-4a5c-4738-a629-b74ea7ca15c8",
        "recipeId": "d3e875b0-c785-485b-a2d0-e5b8b84ee12e",
        "stepNumber": 4,
        "instruction": "Cozinhe tampado em fogo baixo por 15 minutos. Descanse 5 minutos e sirva."
      }
    ]
  },
  {
    "id": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Arroz com Brócolis",
    "slug": "arroz-com-brocolis",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "arroz",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 685,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1600,
    "cookingMethod": "Refogado + cozimento tampado + brócolis finalizado",
    "correctionFactor": null,
    "cookingFactor": 2.336,
    "baseYieldNote": "685g de ingredientes medidos rende cerca de 1,6kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 4,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 125,
      "proteinGPer100g": 2.7,
      "carbsGPer100g": 25.5,
      "fatGPer100g": 1.1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 231,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "3251dc6e-245a-45b0-bb3e-2a70997e8473",
        "name": "Arroz",
        "slug": "arroz"
      }
    ],
    "ingredients": [
      {
        "id": "132be7c6-089a-423a-801f-01c42cc5b3eb",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
        "ingredient": {
          "id": "16d123da-0306-4c63-8194-27d7c2a827c7",
          "name": "Arroz branco",
          "slug": "arroz-branco",
          "displayName": "Arroz branco",
          "aliases": [],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 360,
            "proteinGPer100g": 7.4,
            "carbsGPer100g": 79,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "321d1271-4d8f-43dd-9daa-60d4afd86652",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cozido",
              "gramsEquivalent": 25,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "88bc90a2-b93c-4e20-a4e1-bf3276f1d749",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de servir de arroz cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "973aad03-9104-447d-a8c7-f08aaee06f94",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 escumadeira de arroz cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "acf1ae89-c5ed-42e2-bb57-dae5323ce56d",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 colher de sopa de arroz cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            },
            {
              "id": "ccfb848a-7572-47de-b475-b6408a3505a7",
              "ingredientId": "16d123da-0306-4c63-8194-27d7c2a827c7",
              "measureName": "1 xícara de arroz cru",
              "gramsEquivalent": 180,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 4
            }
          ]
        },
        "name": "Arroz branco",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Arroz branco",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "14383335-0fc1-4db4-a092-f62482bcee00",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "ingredientId": "3849a08e-544e-4b18-bfd9-e3f577af42bb",
        "ingredient": {
          "id": "3849a08e-544e-4b18-bfd9-e3f577af42bb",
          "name": "Brócolis",
          "slug": "brocolis",
          "displayName": "Brócolis",
          "aliases": [
            "Brócolis (floretes)"
          ],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "6c562193-2765-4d75-8fd8-6d7c83080662",
              "ingredientId": "3849a08e-544e-4b18-bfd9-e3f577af42bb",
              "measureName": "1 xícara cozido",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "c5a34de2-a79e-4f64-a304-049d04e98fd2",
              "ingredientId": "3849a08e-544e-4b18-bfd9-e3f577af42bb",
              "measureName": "1 colher de servir cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Brócolis",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 150,
        "quantidade": 150,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Brócolis",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "a393bf54-1aca-41b2-aec4-ff2fed8452d8",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 15,
        "quantidade": 15,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "d8c57e37-a733-4b5a-9b71-790d718d8041",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "75a3c90b-60b8-4888-b658-5e2fac6b8cf0",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "640bf8d4-abc0-4915-9464-0f3de4ffe196",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "stepNumber": 1,
        "instruction": "Refogue o alho no azeite. Adicione o arroz e refogue 1–2 minutos. Acrescente água quente e sal."
      },
      {
        "id": "47fb8eab-bccb-4179-80d3-b39e72ecffcc",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "stepNumber": 2,
        "instruction": "Cozinhe tampado em fogo baixo por 15 minutos."
      },
      {
        "id": "fad35048-ab88-4cfa-8ccf-69f3e222ca5b",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "stepNumber": 3,
        "instruction": "Nos últimos 3 minutos, coloque os floretes de brócolis por cima do arroz, tampe e deixe no vapor residual."
      },
      {
        "id": "2b86cf9d-3fe3-4bdc-a660-b4654f164e58",
        "recipeId": "3d71a80a-63d4-43d8-905f-02e0b7dd3f9e",
        "stepNumber": 4,
        "instruction": "Desligue, descanse 5 minutos. Misture delicadamente e sirva — o brócolis deve ficar al dente e verde, não murcho."
      }
    ]
  },
  {
    "id": "95392184-7589-4fe8-b241-88d1b1eb28d8",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Purê de Batata Doce",
    "slug": "pure-de-batata-doce",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "batata",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1110,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1050,
    "cookingMethod": "Cozimento + amassamento",
    "correctionFactor": null,
    "cookingFactor": 0.946,
    "baseYieldNote": "1,1kg de ingredientes medidos rende cerca de 1,1kg de preparo pronto.",
    "prepTimeMinutes": 50,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 3,
    "practicalityLevel": 3,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 86.1,
      "proteinGPer100g": 1.8,
      "carbsGPer100g": 17.6,
      "fatGPer100g": 1.2,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 232,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "98aa1879-2d18-4b5a-becd-e1a185ff7dfd",
        "name": "Batata",
        "slug": "batata"
      }
    ],
    "ingredients": [
      {
        "id": "47ecf1aa-8e4f-46c6-b634-fd1edccc8935",
        "recipeId": "95392184-7589-4fe8-b241-88d1b1eb28d8",
        "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
        "ingredient": {
          "id": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
          "name": "Batata doce",
          "slug": "batata-doce",
          "displayName": "Batata doce",
          "aliases": [
            "Batata doce (com casca)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": null,
            "proteinGPer100g": null,
            "carbsGPer100g": null,
            "fatGPer100g": null,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "38da8649-439a-465e-a31a-c6c13ee05186",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "90f4317c-68d5-4641-8bbe-21094793452e",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "06d37a6d-dce7-4233-90e7-fa721aa754d5",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 220,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "a47864dd-68cd-45c3-9786-449b828dd199",
              "ingredientId": "52b8dbd7-003b-4590-9a40-59c1b613a7a9",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Batata doce",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Batata doce",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "e42f58b5-32d5-422b-bf17-269c2e69728c",
        "recipeId": "95392184-7589-4fe8-b241-88d1b1eb28d8",
        "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
        "ingredient": {
          "id": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
          "name": "Leite integral",
          "slug": "leite-integral",
          "displayName": "Leite integral",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "ml",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 61,
            "proteinGPer100g": 3,
            "carbsGPer100g": 4.7,
            "fatGPer100g": 3.4,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": null
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "547034d7-2b72-40fa-942b-116ce249c4a3",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 15,
              "mlEquivalent": 15,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "df7736f3-82b5-47f0-b406-85cc5fe611e3",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1/2 xícara",
              "gramsEquivalent": 120,
              "mlEquivalent": 120,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "a3d6f451-9537-45a4-9c73-49985df1b673",
              "ingredientId": "2ca5b2ad-1725-4828-830f-ac9c717034ef",
              "measureName": "1 xícara",
              "gramsEquivalent": 240,
              "mlEquivalent": 240,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Leite integral",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "ml",
        "unidade": "ml",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Leite integral",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "9bcf4e2d-27b8-4453-bb86-98e9b2a200a7",
        "recipeId": "95392184-7589-4fe8-b241-88d1b1eb28d8",
        "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
        "ingredient": {
          "id": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
          "name": "Manteiga",
          "slug": "manteiga",
          "displayName": "Manteiga",
          "aliases": [],
          "shoppingCategory": "Laticínios",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 726,
            "proteinGPer100g": 0.4,
            "carbsGPer100g": 0,
            "fatGPer100g": 82.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "b51a454d-3545-42c2-bee6-65cf0fa74996",
              "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "6aae5796-f5cd-4743-a182-0a0ea17c1122",
              "ingredientId": "9829e42e-43ca-4eed-8e55-d7823e9ccfd0",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 14,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Manteiga",
        "shoppingCategory": "Laticínios",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Manteiga",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "c95f501c-24b9-4c39-9c23-fcaf0469dc8e",
        "recipeId": "95392184-7589-4fe8-b241-88d1b1eb28d8",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "633a8d9a-3310-4cb5-a349-94ac834df7b7",
        "recipeId": "95392184-7589-4fe8-b241-88d1b1eb28d8",
        "stepNumber": 1,
        "instruction": "Cozinhe a batata doce descascada em água com sal até ficar muito macia (~30 minutos). Escorra."
      },
      {
        "id": "7d779a32-2fa4-49a4-a849-be368826c1ef",
        "recipeId": "95392184-7589-4fe8-b241-88d1b1eb28d8",
        "stepNumber": 2,
        "instruction": "Enquanto ainda quente, amasse com espremedor ou garfo. Não use liquidificador — o amido escorrega."
      },
      {
        "id": "28be887c-360b-4bf3-bcc4-f39edf37d65c",
        "recipeId": "95392184-7589-4fe8-b241-88d1b1eb28d8",
        "stepNumber": 3,
        "instruction": "Acrescente a manteiga e incorpore. Adicione o leite aquecido aos poucos até atingir a consistência desejada."
      },
      {
        "id": "dcc3ffee-f5a0-4b0c-855a-aafe2f519e61",
        "recipeId": "95392184-7589-4fe8-b241-88d1b1eb28d8",
        "stepNumber": 4,
        "instruction": "Ajuste o sal e sirva imediatamente."
      }
    ]
  },
  {
    "id": "c2a3c6b2-ac7c-49e4-b341-35714e56edae",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Inhame Cozido",
    "slug": "inhame-cozido",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "pure",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1000,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1000,
    "cookingMethod": "Cozimento em água",
    "correctionFactor": null,
    "cookingFactor": 1,
    "baseYieldNote": "1kg de ingredientes medidos rende cerca de 1kg de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 98,
      "proteinGPer100g": 1.5,
      "carbsGPer100g": 24,
      "fatGPer100g": 0.2,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 233,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "277667d4-8649-4401-b6ae-c6ba06b4efed",
        "name": "Purê",
        "slug": "pure"
      }
    ],
    "ingredients": [
      {
        "id": "cbf2a8af-aa53-4a64-a114-af75db5fe6dd",
        "recipeId": "c2a3c6b2-ac7c-49e4-b341-35714e56edae",
        "ingredientId": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
        "ingredient": {
          "id": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
          "name": "Inhame",
          "slug": "inhame",
          "displayName": "Inhame",
          "aliases": [
            "Inhame (descascado)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 98,
            "proteinGPer100g": 1.5,
            "carbsGPer100g": 24,
            "fatGPer100g": 0.2,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "7b4f1e88-867d-49e4-b393-c96c5058226c",
              "ingredientId": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7c453078-c90e-4701-a281-e643ca7b5c0f",
              "ingredientId": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
              "measureName": "1 unidade média",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "a93fb56c-8dc7-4002-9b0f-6baa17113543",
              "ingredientId": "cfc47e05-c15f-42c0-8ae3-91793b78d5be",
              "measureName": "1 colher de servir cozido",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Inhame",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Inhame",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "a186cf46-d462-4839-aeef-59486c54f7b1",
        "recipeId": "c2a3c6b2-ac7c-49e4-b341-35714e56edae",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "f828e2a0-e4fe-4c82-83df-0f77f94014fa",
        "recipeId": "c2a3c6b2-ac7c-49e4-b341-35714e56edae",
        "stepNumber": 1,
        "instruction": "Descasque o inhame com luva ou em água corrente (a mucilagem pode irritar a pele)."
      },
      {
        "id": "1db0a520-b386-4b1e-a20e-64b1972a020b",
        "recipeId": "c2a3c6b2-ac7c-49e4-b341-35714e56edae",
        "stepNumber": 2,
        "instruction": "Corte em rodelas ou cubos. Leve ao fogo em água com sal por 25–30 minutos até ficar macio."
      },
      {
        "id": "9791497c-8bac-4897-925c-4294a9f014cc",
        "recipeId": "c2a3c6b2-ac7c-49e4-b341-35714e56edae",
        "stepNumber": 3,
        "instruction": "Escorra bem — o inhame retém bastante líquido."
      }
    ]
  },
  {
    "id": "24a04cd0-47ce-4319-8f9c-075b3300d744",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Mandioca Assada",
    "slug": "mandioca-assada",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "mandioca",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 1010,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 780,
    "cookingMethod": "Pré-cozimento + forno ou airfryer",
    "correctionFactor": null,
    "cookingFactor": 0.772,
    "baseYieldNote": "1kg de ingredientes medidos rende cerca de 780g de preparo pronto.",
    "prepTimeMinutes": 40,
    "costLevel": 2,
    "timeLevel": 3,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 171.6,
      "proteinGPer100g": 0.8,
      "carbsGPer100g": 38.5,
      "fatGPer100g": 1.7,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 234,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "5c931a9b-0892-480d-99b5-87a1504afe8b",
        "name": "Mandioca",
        "slug": "mandioca"
      }
    ],
    "ingredients": [
      {
        "id": "31223211-92aa-4f4a-84a9-6d689853343e",
        "recipeId": "24a04cd0-47ce-4319-8f9c-075b3300d744",
        "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
        "ingredient": {
          "id": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
          "name": "Mandioca",
          "slug": "mandioca",
          "displayName": "Mandioca",
          "aliases": [
            "Mandioca (descascada)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 125,
            "proteinGPer100g": 0.6,
            "carbsGPer100g": 30,
            "fatGPer100g": 0.3,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "a9f132d5-8b99-4f5c-b34e-df9d7a1fab8a",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 pedaço pequeno cozido",
              "gramsEquivalent": 60,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "e9dc49dc-c7b2-446b-abf2-fa3e430fd3f7",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 pedaço médio cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "d05692eb-31dc-4fec-bffb-9cf90f27e343",
              "ingredientId": "80ebe6a8-5401-47e2-ad80-7b0c8fe581cc",
              "measureName": "1 colher de servir cozida",
              "gramsEquivalent": 90,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Mandioca",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 1000,
        "quantidade": 1000,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Mandioca",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "9a5eb598-9c4e-4e69-9cb3-e43b95f927bc",
        "recipeId": "24a04cd0-47ce-4319-8f9c-075b3300d744",
        "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
        "ingredient": {
          "id": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
          "name": "Azeite de oliva",
          "slug": "azeite-de-oliva",
          "displayName": "Azeite de oliva",
          "aliases": [],
          "shoppingCategory": "Temperos e Condimentos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 884,
            "proteinGPer100g": 0,
            "carbsGPer100g": 0,
            "fatGPer100g": 100,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 10,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 10
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30002,
          "householdMeasures": [
            {
              "id": "f8b91c44-dbfc-4fc9-96d9-9930d539c079",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de chá",
              "gramsEquivalent": 4.5,
              "mlEquivalent": 5,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "7fab9795-13ef-410b-b797-34316cf9b2a2",
              "ingredientId": "e77d5152-4637-46e5-bb7c-b19c7e1a85d3",
              "measureName": "1 colher de sopa",
              "gramsEquivalent": 13.5,
              "mlEquivalent": 15,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Azeite de oliva",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 10,
        "quantidade": 10,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 10,
        "roundingMode": "up",
        "displayName": "Azeite de oliva",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 10,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "5f39b9c6-a3bb-494a-b646-da08e388855c",
        "recipeId": "24a04cd0-47ce-4319-8f9c-075b3300d744",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "44d5af32-6e99-4686-b86e-ead47eadb9bd",
        "recipeId": "24a04cd0-47ce-4319-8f9c-075b3300d744",
        "stepNumber": 1,
        "instruction": "Cozinhe a mandioca em água com sal até ficar macia mas ainda firme (~20 minutos). Escorra."
      },
      {
        "id": "ff17e117-45c1-428f-901e-74601595220b",
        "recipeId": "24a04cd0-47ce-4319-8f9c-075b3300d744",
        "stepNumber": 2,
        "instruction": "Retire o fio central, corte em palitos ou deixe em pedaços."
      },
      {
        "id": "297ce632-5f63-4f0b-b6c0-53d74fdf602d",
        "recipeId": "24a04cd0-47ce-4319-8f9c-075b3300d744",
        "stepNumber": 3,
        "instruction": "Tempere com azeite e sal."
      },
      {
        "id": "5ef4d9ae-0a8c-474e-afa0-0c7f31c421c1",
        "recipeId": "24a04cd0-47ce-4319-8f9c-075b3300d744",
        "stepNumber": 4,
        "instruction": "Forno: 220°C por 20–25 minutos virando na metade até dourar. Airfryer: 200°C por 15–18 minutos."
      }
    ]
  },
  {
    "id": "bf11e46a-4749-41e5-bb3c-17a24a06a279",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Macarrão Integral",
    "slug": "macarrao-integral",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "massa",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 500,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1250,
    "cookingMethod": "Cozimento em água",
    "correctionFactor": null,
    "cookingFactor": 2.5,
    "baseYieldNote": "500g de ingredientes medidos rende cerca de 1,3kg de preparo pronto.",
    "prepTimeMinutes": 30,
    "costLevel": 1,
    "timeLevel": 2,
    "workLevel": 1,
    "practicalityLevel": 4,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 142.8,
      "proteinGPer100g": 5.4,
      "carbsGPer100g": 28,
      "fatGPer100g": 1,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 235,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "8403c0b5-678f-461c-b20f-ec6118830b78",
        "name": "Massa",
        "slug": "massa"
      }
    ],
    "ingredients": [
      {
        "id": "b5e49e93-bb3a-4ab4-a6d1-99f11e0c5f57",
        "recipeId": "bf11e46a-4749-41e5-bb3c-17a24a06a279",
        "ingredientId": "ce37f20f-d773-41e3-8d0e-1780ea3dae69",
        "ingredient": {
          "id": "ce37f20f-d773-41e3-8d0e-1780ea3dae69",
          "name": "Macarrão integral",
          "slug": "macarrao-integral",
          "displayName": "Macarrão integral",
          "aliases": [
            "Macarrão integral seco"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 357,
            "proteinGPer100g": 13.5,
            "carbsGPer100g": 70,
            "fatGPer100g": 2.4,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "c8bcca5c-eda8-4682-bf77-036919899203",
              "ingredientId": "ce37f20f-d773-41e3-8d0e-1780ea3dae69",
              "measureName": "1 pegador de macarrão cozido",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "9f78e4cf-2c47-46b3-b282-94c5b17614b7",
              "ingredientId": "ce37f20f-d773-41e3-8d0e-1780ea3dae69",
              "measureName": "1 xícara de macarrão cozido",
              "gramsEquivalent": 140,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "9c39c7b1-3ea2-4d6f-a027-70334c3bf019",
              "ingredientId": "ce37f20f-d773-41e3-8d0e-1780ea3dae69",
              "measureName": "1 xícara de macarrão cru",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Macarrão integral",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Macarrão integral",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "c6e8842f-c6ed-405d-8e32-c3a56928f103",
        "recipeId": "bf11e46a-4749-41e5-bb3c-17a24a06a279",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "53405ad0-5c58-4fda-95d2-2d42c3737af9",
        "recipeId": "bf11e46a-4749-41e5-bb3c-17a24a06a279",
        "stepNumber": 1,
        "instruction": "Ferva água abundante com sal."
      },
      {
        "id": "237eed0a-b608-4007-bfe3-538312a48197",
        "recipeId": "bf11e46a-4749-41e5-bb3c-17a24a06a279",
        "stepNumber": 2,
        "instruction": "Cozinhe o macarrão integral pelo tempo indicado na embalagem — geralmente 2–3 minutos a mais que o convencional (10–14 minutos)."
      },
      {
        "id": "b04cbe26-a4f9-434f-bfbc-11210ef4744c",
        "recipeId": "bf11e46a-4749-41e5-bb3c-17a24a06a279",
        "stepNumber": 3,
        "instruction": "O ponto al dente é mais firme que o convencional: o centro deve oferecer leve resistência."
      },
      {
        "id": "59aa75ef-1b1d-4450-9635-f6d6972ad500",
        "recipeId": "bf11e46a-4749-41e5-bb3c-17a24a06a279",
        "stepNumber": 4,
        "instruction": "Escorra e sirva imediatamente."
      }
    ]
  },
  {
    "id": "81255aa0-709f-4677-a1f4-60761f25db9e",
    "categoryId": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
    "category": {
      "id": "22a5e306-e3dc-48ed-bf3c-d1e9e89d655b",
      "name": "Carboidratos",
      "slug": "carboidratos",
      "description": "Preparo de carboidratos para porções planejadas por peso pronto.",
      "isActive": true,
      "sortOrder": 2
    },
    "name": "Feijão",
    "slug": "feijao",
    "shortDescription": "Preparo de carboidrato para planejar porções por peso pronto.",
    "type": "feijao",
    "status": "published",
    "imagePath": null,
    "imageUrl": null,
    "referenceVideoUrl": null,
    "referenceVideoTitle": null,
    "referenceVideoSource": null,
    "referenceVideoNotes": null,
    "baseRawWeightG": 720,
    "baseCleanWeightG": null,
    "baseReadyWeightG": 1500,
    "cookingMethod": "Panela de pressão",
    "correctionFactor": null,
    "cookingFactor": 2.083,
    "baseYieldNote": "720g de ingredientes medidos rende cerca de 1,5kg de preparo pronto.",
    "prepTimeMinutes": 55,
    "costLevel": 2,
    "timeLevel": 4,
    "workLevel": 3,
    "practicalityLevel": 3,
    "versatilityLevel": 3,
    "freezesWell": true,
    "storageInstructions": "Manter refrigerado e separar conforme o planejamento.",
    "reheatInstructions": "Reaquecer se fizer sentido para o preparo.",
    "lockedRecipeWarning": "Use o peso pronto que aparece na sua dieta para definir as porções. O preparo pode ser ajustado mantendo as quantidades proporcionais.",
    "nutrition": {
      "kcalPer100g": 152.4,
      "proteinGPer100g": 10,
      "carbsGPer100g": 19.7,
      "fatGPer100g": 3.4,
      "fiberGPer100g": null,
      "sodiumMgPer100g": null,
      "nutritionNotes": "Valores calculados no dossie com base em ingredientes crus ou secos. Fontes declaradas: TACO/UNICAMP e USDA."
    },
    "sortOrder": 236,
    "tags": [
      {
        "id": "258c76b6-afee-42f7-80c1-900f796824bf",
        "name": "Carboidratos",
        "slug": "carboidratos"
      },
      {
        "id": "8c3e9816-6c2c-4056-821c-b5cdbc080790",
        "name": "Feijão",
        "slug": "feijao"
      }
    ],
    "ingredients": [
      {
        "id": "708721f4-fd67-4934-8665-743d83cd41e3",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "ingredientId": "663fc5e3-9101-40a8-a6e3-db939b6b9506",
        "ingredient": {
          "id": "663fc5e3-9101-40a8-a6e3-db939b6b9506",
          "name": "Feijão carioca",
          "slug": "feijao-carioca",
          "displayName": "Feijão carioca",
          "aliases": [
            "Feijão carioca (seco)"
          ],
          "shoppingCategory": "Carboidratos",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 335,
            "proteinGPer100g": 22,
            "carbsGPer100g": 56,
            "fatGPer100g": 1.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 100,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 100
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30000,
          "householdMeasures": [
            {
              "id": "1cefaab8-b725-42c5-9486-8c0300971ca4",
              "ingredientId": "663fc5e3-9101-40a8-a6e3-db939b6b9506",
              "measureName": "1 concha pequena de feijão cozido",
              "gramsEquivalent": 80,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "e31e60f7-cca7-47ec-b77b-8432e018c833",
              "ingredientId": "663fc5e3-9101-40a8-a6e3-db939b6b9506",
              "measureName": "1 concha média de feijão cozido",
              "gramsEquivalent": 120,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "9284a48f-d416-4963-a52f-d1c6d0bff04a",
              "ingredientId": "663fc5e3-9101-40a8-a6e3-db939b6b9506",
              "measureName": "1 concha grande de feijão cozido",
              "gramsEquivalent": 160,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "c6fecfb4-2094-459f-9e79-067437c90722",
              "ingredientId": "663fc5e3-9101-40a8-a6e3-db939b6b9506",
              "measureName": "1 colher de sopa de feijão cru",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Feijão carioca",
        "shoppingCategory": "Carboidratos",
        "ingredientRole": "main",
        "role": "main",
        "baseQuantity": 500,
        "quantidade": 500,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 100,
        "roundingMode": "up",
        "displayName": "Feijão carioca",
        "notes": null,
        "sortOrder": 0,
        "packageSizeG": null,
        "purchaseIncrementG": 100,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "dd61acf4-d9da-46b6-84da-4f73ce95c15e",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "ingredientId": "c88522f9-5c45-4739-b113-f818cbd220f2",
        "ingredient": {
          "id": "c88522f9-5c45-4739-b113-f818cbd220f2",
          "name": "Bacon",
          "slug": "bacon",
          "displayName": "Bacon",
          "aliases": [],
          "shoppingCategory": "Proteínas",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 541,
            "proteinGPer100g": 37,
            "carbsGPer100g": 0,
            "fatGPer100g": 43,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "2ed8a6e7-cbd0-4188-ad86-d31ac71c914f",
              "ingredientId": "c88522f9-5c45-4739-b113-f818cbd220f2",
              "measureName": "1 fatia fina",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "9a6eed66-5da3-40df-9197-de75765489ed",
              "ingredientId": "c88522f9-5c45-4739-b113-f818cbd220f2",
              "measureName": "1 colher de sopa em cubos",
              "gramsEquivalent": 15,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            }
          ]
        },
        "name": "Bacon",
        "shoppingCategory": "Proteínas",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Bacon",
        "notes": null,
        "sortOrder": 1,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "651babe5-e24e-4365-a03b-fb95ab7eb0da",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "ingredientId": "40000000-0000-0000-0000-000000000008",
        "ingredient": {
          "id": "40000000-0000-0000-0000-000000000008",
          "name": "Cebola",
          "slug": "cebola",
          "displayName": "Cebola",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 40,
            "proteinGPer100g": 1,
            "carbsGPer100g": 9,
            "fatGPer100g": 0,
            "fiberGPer100g": 1.7,
            "sodiumMgPer100g": 4,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": 1.11,
            "ediblePortionPercent": 90,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30001,
          "householdMeasures": [
            {
              "id": "01952153-1183-4c3c-b8c2-f32c3110be10",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade pequena",
              "gramsEquivalent": 70,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "bc4e2dbe-0fb4-447e-b201-0346f3914337",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade média",
              "gramsEquivalent": 100,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "ceacd08d-abed-44a9-9490-7e1041ac58fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 unidade grande",
              "gramsEquivalent": 150,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            },
            {
              "id": "533b2bf7-814d-40bd-905a-361f9f4219fd",
              "ingredientId": "40000000-0000-0000-0000-000000000008",
              "measureName": "1 colher de sopa picada",
              "gramsEquivalent": 10,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 3
            }
          ]
        },
        "name": "Cebola",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 100,
        "quantidade": 100,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Cebola",
        "notes": null,
        "sortOrder": 2,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "6d32e8fa-fbaf-4f37-b4c4-dc27fd02d8ae",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
        "ingredient": {
          "id": "66587b47-87a0-499b-98b9-967bbdc2bfec",
          "name": "Alho",
          "slug": "alho",
          "displayName": "Alho",
          "aliases": [],
          "shoppingCategory": "Vegetais",
          "defaultUnit": "g",
          "isActive": true,
          "nutrition": {
            "kcalPer100g": 149,
            "proteinGPer100g": 6.4,
            "carbsGPer100g": 33,
            "fatGPer100g": 0.5,
            "fiberGPer100g": null,
            "sodiumMgPer100g": null,
            "nutritionSource": "Dossie Carboidratos Engenharia Hibrida; TACO/USDA conforme documento.",
            "nutritionNotes": "Valores importados do dossie de carboidratos. Podem variar conforme marca, variedade e origem."
          },
          "purchaseRules": {
            "defaultRoundingMode": "up",
            "defaultRoundingStep": 50,
            "buyInWholePackages": false,
            "packageSizeG": null,
            "packageLabel": null,
            "purchaseIncrementG": 50
          },
          "correctionFactors": {
            "defaultCorrectionFactor": null,
            "ediblePortionPercent": null,
            "correctionNotes": null
          },
          "notes": null,
          "sortOrder": 30003,
          "householdMeasures": [
            {
              "id": "2d9760c1-a00c-4f7b-b83a-337cd6fbf97f",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente pequeno",
              "gramsEquivalent": 3,
              "mlEquivalent": null,
              "isDefault": true,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 0
            },
            {
              "id": "2ffeb725-eb90-4628-9bef-595fa39241ba",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente médio",
              "gramsEquivalent": 5,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 1
            },
            {
              "id": "53ba362e-701a-4977-923c-f8dec4443219",
              "ingredientId": "66587b47-87a0-499b-98b9-967bbdc2bfec",
              "measureName": "1 dente grande",
              "gramsEquivalent": 7,
              "mlEquivalent": null,
              "isDefault": false,
              "notes": "Medida caseira aproximada; pode variar conforme tamanho, corte, marca e utensílio.",
              "sortOrder": 2
            }
          ]
        },
        "name": "Alho",
        "shoppingCategory": "Vegetais",
        "ingredientRole": "complement",
        "role": "complement",
        "baseQuantity": 20,
        "quantidade": 20,
        "unit": "g",
        "unidade": "g",
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": false,
        "seasoning": false,
        "includeInShoppingList": true,
        "roundingStep": 50,
        "roundingMode": "up",
        "displayName": "Alho",
        "notes": null,
        "sortOrder": 3,
        "packageSizeG": null,
        "purchaseIncrementG": 50,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      },
      {
        "id": "092e127f-40fe-4259-902f-069f15b45334",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "ingredientId": null,
        "ingredient": null,
        "name": "Sal, louro, pimenta-do-reino, cominho",
        "shoppingCategory": "Temperos e Condimentos",
        "ingredientRole": "seasoning",
        "role": "seasoning",
        "baseQuantity": null,
        "quantidade": null,
        "unit": null,
        "unidade": null,
        "isCritical": false,
        "critical": false,
        "isFreeSeasoning": true,
        "seasoning": true,
        "includeInShoppingList": true,
        "roundingStep": null,
        "roundingMode": "none",
        "displayName": "Sal, louro, pimenta-do-reino, cominho",
        "notes": null,
        "sortOrder": 4,
        "packageSizeG": null,
        "purchaseIncrementG": null,
        "purchaseUnit": null,
        "packageLabel": null,
        "buyInWholePackages": false
      }
    ],
    "steps": [
      {
        "id": "fe62d7e3-9f62-432d-a5da-829202801882",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "stepNumber": 1,
        "instruction": "Deixe o feijão de molho em água por 8–12 horas. Escorra antes de cozinhar."
      },
      {
        "id": "0de4111c-e37e-4d40-bf68-5a312de75064",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "stepNumber": 2,
        "instruction": "Em panela de pressão, doure o bacon picado em fogo médio até fritar levemente na própria gordura. Retire o bacon e reserve, deixando a gordura na panela."
      },
      {
        "id": "161a9c0d-6f29-4827-b973-4d0f8c6609ed",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "stepNumber": 3,
        "instruction": "Na gordura do bacon, refogue o alho amassado e a cebola picada até amolecer."
      },
      {
        "id": "23a17fb1-9184-4f05-a8f8-7760214e8862",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "stepNumber": 4,
        "instruction": "Acrescente o feijão escorrido, o bacon reservado, louro, pimenta e cominho. Cubra com água (~1,5 litro)."
      },
      {
        "id": "12126dfd-cadb-4aa0-9d73-d3faa4b38f60",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "stepNumber": 5,
        "instruction": "Tampe e cozinhe em pressão por 25–30 minutos após pegar pressão."
      },
      {
        "id": "ee8b4632-95f0-499b-8f5e-7ce6efeea844",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "stepNumber": 6,
        "instruction": "Libere a pressão, ajuste o sal e a consistência do caldo. Se quiser caldo mais grosso, amasse alguns grãos contra a lateral da panela com a colher e mexa bem."
      },
      {
        "id": "fd24db6b-4a9f-4a38-a574-4173cffdf639",
        "recipeId": "81255aa0-709f-4677-a1f4-60761f25db9e",
        "stepNumber": 7,
        "instruction": "O feijão ideal tem caldo encorpado, escuro, com gosto profundo de alho e cominho."
      }
    ]
  }
]
