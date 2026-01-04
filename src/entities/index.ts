/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Interface for FrequentlyAskedQuestions
 */
export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  question?: string;
  answer?: string;
  category?: string;
  displayOrder?: number;
  isPublished?: boolean;
}


/**
 * Collection ID: howitworkssteps
 * Interface for HowItWorksSteps
 */
export interface HowItWorksSteps {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  title?: string;
  description?: string;
  icon?: string;
  stepNumber?: number;
  callToActionText?: string;
}


/**
 * Collection ID: pricingplans
 * Interface for PricingPlans
 */
export interface PricingPlans {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  tierName?: string;
  price?: number;
  priceUnit?: string;
  description?: string;
  features?: string;
  callToActionText?: string;
  callToActionUrl?: string;
  isMostPopular?: boolean;
}


/**
 * Collection ID: productfeatures
 * Interface for ProductFeatures
 */
export interface ProductFeatures {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  title?: string;
  shortDescription?: string;
  description?: string;
  icon?: string;
  learnMoreUrl?: string;
  isNew?: boolean;
}


/**
 * Collection ID: usecases
 * Interface for UseCases
 */
export interface UseCases {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  title?: string;
  descriptionPoint1?: string;
  descriptionPoint2?: string;
  descriptionPoint3?: string;
  illustration?: string;
}


/**
 * Collection ID: usertestimonials
 * Interface for UserTestimonials
 */
export interface UserTestimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  testimonialQuote?: string;
  userName?: string;
  userTitleCompany?: string;
  userPhoto?: string;
  rating?: number;
  testimonialDate?: Date | string;
}
