import { Box, Button, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const GainerComp = () => {


  // const data= [
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/muscleblaze-biozyme-performance-whey/SP-84971?navKey=VRNT-208116&itracker=w:bestseller|undefined||;p:1|;e:208116|;",
  //     "image": "https://img5.hkrtcdn.com/22806/prd_2280584_c_s.jpg",
  //     "star_rating": 4.4,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "2.6k reviews",
  //     "block href": "https://www.healthkart.com/sv/muscleblaze-biozyme-performance-whey/SP-84971?navKey=VRNT-208116&itracker=w:bestseller||;p:1|;e:208116|;",
  //     "name": "MuscleBlaze Biozyme Performance Whey-   4.4 lb  Special Edition Pack (75th Indian Army Day) Triple Chocolate",
  //     "price1": 4499,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 6399,
  //     "discount": 29,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "4,364",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/on-optimum-nutrition-gold-standard-100-whey-protein/SP-9558?navKey=VRNT-14662&itracker=w:bestseller|undefined||;p:2|;e:14662|;",
  //     "image": "https://img3.hkrtcdn.com/18797/prd_1879652-ON-Optimum-Nutrition-Gold-Standard-100-Whey-Protein-5-lb-Double-Rich-Chocolate_c_s.jpg",
  //     "star_rating": 4.4,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "3.2k reviews",
  //     "block href": "https://www.healthkart.com/sv/on-optimum-nutrition-gold-standard-100-whey-protein/SP-9558?navKey=VRNT-14662&itracker=w:bestseller||;p:2|;e:14662|;",
  //     "name": "ON (Optimum Nutrition) Gold Standard 100% Whey Protein-   5 lb  Double Rich Chocolate",
  //     "price1": 6741,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 8099,
  //     "discount": 16,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "6,539",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/gnc-pro-performance-power-protein/SP-109382?navKey=VRNT-204846&itracker=w:bestseller|undefined||;p:3|;e:204846|;",
  //     "image": "https://img1.hkrtcdn.com/22238/prd_2223760_c_s.jpg",
  //     "star_rating": 4,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "4 reviews",
  //     "block href": "https://www.healthkart.com/sv/gnc-pro-performance-power-protein/SP-109382?navKey=VRNT-204846&itracker=w:bestseller||;p:3|;e:204846|;",
  //     "name": "GNC Pro Performance Power Protein-   4 lb  Double Rich Chocolate + FREE Patchauli Unisex Perfume by Bella Vita Luxury",
  //     "price1": 3999,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 6599,
  //     "discount": 39,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "3,799",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/muscletech-nitrotech-whey-protein/SP-85729?navKey=VRNT-182370&itracker=w:bestseller|undefined||;p:4|;e:182370|;",
  //     "image": "https://img3.hkrtcdn.com/18457/prd_1845622-MuscleTech-Nitro-Tech-Whey-Protein-4.4-lb-Milk-Chocolate_c_s.jpg",
  //     "star_rating": 4.2,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "57 reviews",
  //     "block href": "https://www.healthkart.com/sv/muscletech-nitrotech-whey-protein/SP-85729?navKey=VRNT-182370&itracker=w:bestseller||;p:4|;e:182370|;",
  //     "name": "MuscleTech NitroTech Whey Protein-   4.4 lb  Milk Chocolate - India",
  //     "price1": 6199,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 7799,
  //     "discount": 20,
  //     "premium-icon src": "",
  //     "bold": "",
  //     "msg-content": ""
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/mb-fuel-one-whey-protein-immunityplus/SP-72195?navKey=VRNT-152117&itracker=w:bestseller|undefined||;p:5|;e:152117|;",
  //     "image": "https://img5.hkrtcdn.com/19801/prd_1980004_c_s.jpg",
  //     "star_rating": 4.3,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "1.6k reviews",
  //     "block href": "https://www.healthkart.com/sv/mb-fuel-one-whey-protein-immunityplus/SP-72195?navKey=VRNT-152117&itracker=w:bestseller||;p:5|;e:152117|;",
  //     "name": "MB Fuel One Whey Protein Immunity+-   4.4 lb  Chocolate",
  //     "price1": 3549,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 5099,
  //     "discount": 30,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "3,443",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/muscleblaze-whey-protein/SP-8686?navKey=VRNT-125913&itracker=w:bestseller|undefined||;p:6|;e:125913|;",
  //     "image": "https://img6.hkrtcdn.com/12133/prd_1213295-MuscleBlaze-Whey-Protein-4-lb-Rich-Milk-Chocolate_c_s.jpg",
  //     "star_rating": 4.4,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "3.6k reviews",
  //     "block href": "https://www.healthkart.com/sv/muscleblaze-whey-protein/SP-8686?navKey=VRNT-125913&itracker=w:bestseller||;p:6|;e:125913|;",
  //     "name": "MuscleBlaze Whey Protein-   4 lb  Rich Milk Chocolate",
  //     "price1": 4849,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 6399,
  //     "discount": 24,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "4,704",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/dymatize-elite-100-whey-protein/SP-9720?navKey=VRNT-15016&itracker=w:bestseller|undefined||;p:7|;e:15016|;",
  //     "image": "https://img3.hkrtcdn.com/20007/prd_2000612-Dymatize-Elite-100-Whey-Protein-5-lb-Rich-Chocolate_c_s.jpg",
  //     "star_rating": 4.3,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "373 reviews",
  //     "block href": "https://www.healthkart.com/sv/dymatize-elite-100-whey-protein/SP-9720?navKey=VRNT-15016&itracker=w:bestseller||;p:7|;e:15016|;",
  //     "name": "Dymatize Elite 100% Whey Protein-   5 lb  Rich Chocolate",
  //     "price1": 7727,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 1999,
  //     "discount": 29,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "7,341",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/muscleblaze-biozyme-whey-protein/SP-66685?navKey=VRNT-134799&itracker=w:bestseller|undefined||;p:8|;e:134799|;",
  //     "image": "https://img10.hkrtcdn.com/12134/prd_1213319-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
  //     "star_rating": 4.5,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "1.6k reviews",
  //     "block href": "https://www.healthkart.com/sv/muscleblaze-biozyme-whey-protein/SP-66685?navKey=VRNT-134799&itracker=w:bestseller||;p:8|;e:134799|;",
  //     "name": "MuscleBlaze Biozyme Whey Protein-   4.4 lb  Rich Milk Chocolate",
  //     "price1": 5599,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 7449,
  //     "discount": 24,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "5,431",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/myprotein-impact-whey-protein/SP-37697?navKey=VRNT-69553&itracker=w:bestseller|undefined||;p:9|;e:69553|;",
  //     "image": "https://img1.hkrtcdn.com/18137/prd_1813600-Myprotein-Impact-Whey-Protein-5.5-lb-Chocolate-Smooth_c_s.jpg",
  //     "star_rating": 4.1,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "594 reviews",
  //     "block href": "https://www.healthkart.com/sv/myprotein-impact-whey-protein/SP-37697?navKey=VRNT-69553&itracker=w:bestseller||;p:9|;e:69553|;",
  //     "name": "Myprotein Impact Whey Protein-   5.5 lb  Chocolate Smooth",
  //     "price1": 7298,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 8999,
  //     "discount": 18,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "6,933",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/ultimate-nutrition-prostar-100-whey-protein/SP-9929?navKey=VRNT-15398&itracker=w:bestseller|undefined||;p:10|;e:15398|;",
  //     "image": "https://img1.hkrtcdn.com/1691/prd_169080_c_s.jpg",
  //     "star_rating": 4.6,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "2.5k reviews",
  //     "block href": "https://www.healthkart.com/sv/ultimate-nutrition-prostar-100-whey-protein/SP-9929?navKey=VRNT-15398&itracker=w:bestseller||;p:10|;e:15398|;",
  //     "name": "Ultimate Nutrition Prostar 100% Whey Protein-   5.28 lb  Chocolate Creme",
  //     "price1": 7149,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 9499,
  //     "discount": 24,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "6,792",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/muscleblaze-whey-gold-protein/SP-42838?navKey=VRNT-77603&itracker=w:bestseller|undefined||;p:11|;e:77603|;",
  //     "image": "https://img2.hkrtcdn.com/12134/prd_1213301-MuscleBlaze-Whey-Gold-Protein-4.4-lb-Rich-Milk-Chocolate_c_s.jpg",
  //     "star_rating": 4.5,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "2k reviews",
  //     "block href": "https://www.healthkart.com/sv/muscleblaze-whey-gold-protein/SP-42838?navKey=VRNT-77603&itracker=w:bestseller||;p:11|;e:77603|;",
  //     "name": "MuscleBlaze Whey Gold Protein-   4.4 lb  Rich Milk Chocolate",
  //     "price1": 6499,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 8669,
  //     "discount": 25,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "6,304",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/mb-fuel-one-whey-protein-powder-immunityplus/SP-84791?navKey=VRNT-158713&itracker=w:bestseller|undefined||;p:12|;e:158713|;",
  //     "image": "https://img2.hkrtcdn.com/13039/prd_1303871-MB-Fuel-One-Whey-Protein-Immunity-OP-2.2-lb-Chocolate_c_s.jpg",
  //     "star_rating": 4.5,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "11 reviews",
  //     "block href": "https://www.healthkart.com/sv/mb-fuel-one-whey-protein-powder-immunityplus/SP-84791?navKey=VRNT-158713&itracker=w:bestseller||;p:12|;e:158713|;",
  //     "name": "MB Fuel One Whey Protein Powder Immunity+-   2.2 lb  Chocolate",
  //     "price1": 1749,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 2669,
  //     "discount": 34,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "1,697",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/big-muscles-essential-whey-protein/SP-97030?navKey=VRNT-180732&itracker=w:bestseller|undefined||;p:13|;e:180732|;",
  //     "image": "https://img9.hkrtcdn.com/18191/prd_1819008-Big-Muscles-Essential-Whey-Protein-2.2-lb-Dutch-Chocolate_c_s.jpg",
  //     "star_rating": 4.3,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "72 reviews",
  //     "block href": "https://www.healthkart.com/sv/big-muscles-essential-whey-protein/SP-97030?navKey=VRNT-180732&itracker=w:bestseller||;p:13|;e:180732|;",
  //     "name": "Big Muscles Essential Whey Protein-   2.2 lb  Dutch Chocolate",
  //     "price1": 1049,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 1599,
  //     "discount": 34,
  //     "premium-icon src": "",
  //     "bold": "",
  //     "msg-content": ""
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/one-science-100-premium-whey-protein/SP-57979?navKey=VRNT-140581&itracker=w:bestseller|undefined||;p:14|;e:140581|;",
  //     "image": "https://img7.hkrtcdn.com/20011/prd_2001006-One-Science-100-Premium-Whey-Protein-5-lb-Chocolate-Charge_c_s.jpg",
  //     "star_rating": 4.2,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "79 reviews",
  //     "block href": "https://www.healthkart.com/sv/one-science-100-premium-whey-protein/SP-57979?navKey=VRNT-140581&itracker=w:bestseller||;p:14|;e:140581|;",
  //     "name": "One Science 100% Premium Whey Protein-   5 lb  Chocolate Charge",
  //     "price1": 5640,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 8499,
  //     "discount": 33,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "5,358",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/gnc-amp-gold-series-100-whey-protein-advanced/SP-58855?navKey=VRNT-104127&itracker=w:bestseller|undefined||;p:15|;e:104127|;",
  //     "image": "https://img6.hkrtcdn.com/12586/prd_1258555-GNC-Amp-Gold-Series-100-Whey-Protein-Advanced-4.4-lb-Double-Rich-Chocolate_c_s.jpg",
  //     "star_rating": 4.2,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "70 reviews",
  //     "block href": "https://www.healthkart.com/sv/gnc-amp-gold-series-100-whey-protein-advanced/SP-58855?navKey=VRNT-104127&itracker=w:bestseller||;p:15|;e:104127|;",
  //     "name": "GNC Amp Gold Series 100% Whey Protein Advanced-   4.4 lb  Double Rich Chocolate",
  //     "price1": 6499,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 8999,
  //     "discount": 27,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "6,174",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/asitis-nutrition-atom-whey-protein-with-enzymes/SP-108160?navKey=VRNT-202436&itracker=w:bestseller|undefined||;p:16|;e:202436|;",
  //     "image": "https://img7.hkrtcdn.com/21498/prd_2149716-Asitis-Nutrition-ATOM-Whey-Protein-with-Enzymes-2.2-lb-Double-Rich-Chocolate_c_s.jpg",
  //     "star_rating": null,
  //     "star_rating src": "",
  //     "flexing-reviews": "",
  //     "block href": "https://www.healthkart.com/sv/asitis-nutrition-atom-whey-protein-with-enzymes/SP-108160?navKey=VRNT-202436&itracker=w:bestseller||;p:16|;e:202436|;",
  //     "name": "Asitis Nutrition ATOM Whey Protein with Enzymes-   2.2 lb  Double Rich Chocolate",
  //     "price1": 2399,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 2599,
  //     "discount": 7,
  //     "premium-icon src": "",
  //     "bold": "",
  //     "msg-content": ""
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/nakpro-whey-gold-whey-protein-concentrate/SP-91447?navKey=VRNT-170243&itracker=w:bestseller|undefined||;p:17|;e:170243|;",
  //     "image": "https://img6.hkrtcdn.com/15137/prd_1513675-Nakpro-Whey-Gold-Whey-Protein-Concentrate-2.2-lb-Chocolate_c_s.jpg",
  //     "star_rating": 4.3,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "77 reviews",
  //     "block href": "https://www.healthkart.com/sv/nakpro-whey-gold-whey-protein-concentrate/SP-91447?navKey=VRNT-170243&itracker=w:bestseller||;p:17|;e:170243|;",
  //     "name": "Nakpro Whey Gold Whey Protein Concentrate-   2.2 lb  Chocolate",
  //     "price1": 1699,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 2999,
  //     "discount": 43,
  //     "premium-icon src": "",
  //     "bold": "",
  //     "msg-content": ""
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/nutrabay-gold-vital-whey-protein/SP-108052?navKey=VRNT-202306&itracker=w:bestseller|undefined||;p:18|;e:202306|;",
  //     "image": "https://img5.hkrtcdn.com/21486/prd_2148584-Nutrabay-Gold-Vital-Whey-Protein-2.2-lb-Belgian-Chocolate_c_s.jpg",
  //     "star_rating": null,
  //     "star_rating src": "",
  //     "flexing-reviews": "",
  //     "block href": "https://www.healthkart.com/sv/nutrabay-gold-vital-whey-protein/SP-108052?navKey=VRNT-202306&itracker=w:bestseller||;p:18|;e:202306|;",
  //     "name": "Nutrabay Gold Vital Whey Protein-   2.2 lb  Belgian Chocolate",
  //     "price1": 949,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 1999,
  //     "discount": 52,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "902",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/muscleblaze-whey-gold-with-digezyme/SP-65049?navKey=VRNT-115551&itracker=w:bestseller|undefined||;p:19|;e:115551|;",
  //     "image": "https://img2.hkrtcdn.com/8194/prd_819321-MuscleBlaze-Whey-Gold-with-Digezyme-8.8-lb-Rich-Milk-Chocolate_c_s.jpg",
  //     "star_rating": 4.6,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "97 reviews",
  //     "block href": "https://www.healthkart.com/sv/muscleblaze-whey-gold-with-digezyme/SP-65049?navKey=VRNT-115551&itracker=w:bestseller||;p:19|;e:115551|;",
  //     "name": "MuscleBlaze Whey Gold with Digezyme-   8.8 lb  Rich Milk Chocolate",
  //     "price1": 11000,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 1699,
  //     "discount": 29,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "10,670",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/nakpro-perform-whey-protein-concentrate/SP-91451?navKey=VRNT-170261&itracker=w:bestseller|undefined||;p:20|;e:170261|;",
  //     "image": "https://img6.hkrtcdn.com/15136/prd_1513585-Nakpro-Perform-Whey-Protein-Concentrate-2.2-lb-Chocolate_c_s.jpg",
  //     "star_rating": 4.1,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "150 reviews",
  //     "block href": "https://www.healthkart.com/sv/nakpro-perform-whey-protein-concentrate/SP-91451?navKey=VRNT-170261&itracker=w:bestseller||;p:20|;e:170261|;",
  //     "name": "Nakpro Perform Whey Protein Concentrate-   2.2 lb  Chocolate",
  //     "price1": 1448,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 2299,
  //     "discount": 37,
  //     "premium-icon src": "",
  //     "bold": "",
  //     "msg-content": ""
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/xlr8-flavoured-whey-protein-24-g-protein/SP-80127?navKey=VRNT-150467&itracker=w:bestseller|undefined||;p:21|;e:150467|;",
  //     "image": "https://img5.hkrtcdn.com/20215/prd_2021494-XLR8-Flavoured-Whey-Protein-24-g-Protein-2-lb-Chocolate_c_s.jpg",
  //     "star_rating": 4.3,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "352 reviews",
  //     "block href": "https://www.healthkart.com/sv/xlr8-flavoured-whey-protein-24-g-protein/SP-80127?navKey=VRNT-150467&itracker=w:bestseller||;p:21|;e:150467|;",
  //     "name": "XLR8 Flavoured Whey Protein 24 g Protein-   2 lb  Chocolate",
  //     "price1": 1698,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 2700,
  //     "discount": 37,
  //     "premium-icon src": "",
  //     "bold": "",
  //     "msg-content": ""
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/on-optimum-nutrition-performance-whey/SP-8709?navKey=VRNT-171207&itracker=w:bestseller|undefined||;p:22|;e:171207|;",
  //     "image": "https://img9.hkrtcdn.com/19475/prd_1947438-ON-Optimum-Nutrition-Performance-Whey-2.2-lb-Chocolate-Milkshake_c_s.jpg",
  //     "star_rating": 4,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "43 reviews",
  //     "block href": "https://www.healthkart.com/sv/on-optimum-nutrition-performance-whey/SP-8709?navKey=VRNT-171207&itracker=w:bestseller||;p:22|;e:171207|;",
  //     "name": "ON (Optimum Nutrition) Performance Whey-   2.2 lb  Chocolate Milkshake",
  //     "price1": 2814,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 3199,
  //     "discount": 12,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "2,730",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/musclepharm-combat-100-whey/SP-40185?navKey=VRNT-73257&itracker=w:bestseller|undefined||;p:23|;e:73257|;",
  //     "image": "https://img9.hkrtcdn.com/19911/prd_1991048-MusclePharm-Combat-100-Whey-5-lb-Chocolate-Milk_c_s.jpg",
  //     "star_rating": 4.2,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "37 reviews",
  //     "block href": "https://www.healthkart.com/sv/musclepharm-combat-100-whey/SP-40185?navKey=VRNT-73257&itracker=w:bestseller||;p:23|;e:73257|;",
  //     "name": "MusclePharm Combat 100% Whey-   5 lb  Chocolate Milk",
  //     "price1": 6798,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 8199,
  //     "discount": 17,
  //     "premium-icon src": "https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg",
  //     "bold": "6,458",
  //     "msg-content": "for Premium Member"
  //   },
  //   {
  //     "variant-img-container href": "https://www.healthkart.com/sv/muscletech-nitrotech-100-whey-gold/SP-44389?navKey=VRNT-90443&itracker=w:bestseller|undefined||;p:24|;e:90443|;",
  //     "image": "https://img9.hkrtcdn.com/18228/prd_1822728-MuscleTech-Nitrotech-100-Whey-Gold-5.54-lb-Double-Rich-Chocolate_c_s.jpg",
  //     "star_rating": 4.1,
  //     "star_rating src": "https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg",
  //     "flexing-reviews": "30 reviews",
  //     "block href": "https://www.healthkart.com/sv/muscletech-nitrotech-100-whey-gold/SP-44389?navKey=VRNT-90443&itracker=w:bestseller||;p:24|;e:90443|;",
  //     "name": "MuscleTech Nitrotech 100% Whey Gold-   5.03 lb  Double Rich Chocolate",
  //     "price1": 6599,
  //     "category": "whey",
  //     "quantity": 3,
  //     "reviews": [],
  //     "ratings": [],
  //     "price2": 7999,
  //     "discount": 17,
  //     "premium-icon src": "",
  //     "bold": "",
  //     "msg-content": ""
  //   }
  // ]

  const [ page, setPage]= useState(1);
  
  const [searchParams, setSearchParams]= useSearchParams();

  const location= useLocation();

  const initialSort= searchParams.getAll("priceSort");

  const [sort, setSortBy]= useState( initialSort || '');
  const [category]= searchParams.getAll("category" || []);
  const [discountValue]= searchParams.getAll("discountByCat" || "");
  const [ratingvalue]= searchParams.getAll("rating" || "");
  const [pricevalue]= searchParams.getAll("priceByCat" || []);

  const handleSort= (e)=>{
    setSortBy(e.target.value);
}

useEffect(()=>{
    let params={};
    category && (params.category= category);
    discountValue && (params.discountByCat=discountValue);
    ratingvalue && (params.rating=ratingvalue);
    pricevalue && (params.priceByCat= pricevalue);
    sort && (params.priceSort= sort);
    setSearchParams(params);
}, [setSearchParams, searchParams, sort, discountValue, category,  ratingvalue, pricevalue]);



  
const [data, setData]= useState([]);

useEffect(()=>{
  if(location || data.length===0){
      const getDataParams={
          params: {
            input: category&&category,
            priceSort: sort&&sort,
            discountByCat: discountValue&&discountValue,
            priceByCat:pricevalue&&pricevalue
          }
      }
      getData(getDataParams);
  }
}, [data.length, location.search, page, searchParams]);

const handlePageChange = (value) => {
  setPage(page + value);
};



const getData= (params)=>{
  return axios.get(`https://lime-fawn-veil.cyclic.app/product?category=gainers&page=${page}&limit=21`, params)
      .then((r)=>{
        setData(r.data)
      })
      .catch((e)=>console.log(e));
  }


  return (
    <Box>
      <Box w="95%" m="15px auto" justifyContent="right" display="flex" alignItems="center">
        <Box w={["65%", "40%", "30%"]} border="1px solid gray" rounded="10px" p={["3px 6px", "4px 8px", "5px 10px"]} justifyContent="flex-start" display="flex" alignItems="center">
          <Text w="35%" m="0" fontSize={["13px", "14px", "16px"]}>Sort By: </Text>
          <Select border="none" outline="2px solid white" p="0px" fontSize={["13px", "14px", "16px"]} bg="white" color="black" onChange={handleSort}>
              <option p={["0px", "5px", "10px"]} value="" name="sortBy">Popularity</option>
              <option p={["0px", "5px", "10px"]} value="asc" name="sortBy">Price: Low to High</option>
              <option p={["0px", "5px", "10px"]} value="desc" name="sortBy">Price: High to Low</option>
          </Select>
        </Box>
      </Box>
      <Box w="100%" display="grid" gap="20px" gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} >
        {data && data.map((el)=>{
            return <ProductCard key={el.id} props={el} />
        })}
      </Box>
      <Box w="50%" m="auto" mt="20px" textAlign="center" mb="20px" display="flex" gap="10px">
      <Button border="1px solid black" rounded="5px" fontWeight="bold" fontSize="16px" p="15px 15px" disabled={page === 1} onClick={() => handlePageChange(-1)}>
        PREV
      </Button>
      <Button border="1px solid black" rounded="5px" fontWeight="bold" fontSize="16px" p="15px 15px">{page}</Button>
      <Button border="1px solid black" rounded="5px" fontWeight="bold" fontSize="16px" p="15px 15px" disabled={page === 23} onClick={() => handlePageChange(1)}>NEXT</Button>
      </Box>
    </Box>
  )
}

export default GainerComp
