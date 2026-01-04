import faqsData from "../../src/data/faqs.json";
import howItWorksStepsData from "../../src/data/howitworkssteps.json";
import productFeaturesData from "../../src/data/productfeatures.json";
import pricingPlansData from "../../src/data/pricingplans.json";
import useCasesData from "../../src/data/usecases.json";
import userTestimonialsData from "../../src/data/usertestimonials.json";
import { WixDataItem } from "./types";


/**
 * Static data service for collections
 * Provides access to static JSON data
 */
export class BaseCrudService {
  /**
   * Retrieves all items from the collection
   * @param collectionId - The collection to query
   * @param includeReferencedItems - Array of reference field names to populate
   * @returns Promise<{items: T[]}> - Query result with all items
   */
  static async getAll<T extends WixDataItem>(
    collectionId: string,
    includeReferencedItems?: string[]
  ): Promise<{ items: T[] }> {
    try {
      let data: any[] = [];
      switch (collectionId) {
        case 'faqs':
          data = faqsData;
          break;
        case 'howitworkssteps':
          data = howItWorksStepsData;
          break;
        case 'productfeatures':
          data = productFeaturesData;
          break;
        case 'pricingplans':
          data = pricingPlansData;
          break;
        case 'usecases':
          data = useCasesData;
          break;
        case 'usertestimonials':
          data = userTestimonialsData;
          break;
        default:
          throw new Error(`Unknown collection: ${collectionId}`);
      }

      return { items: data as T[] };
    } catch (error) {
      console.error(`Error fetching ${collectionId}s:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to fetch ${collectionId}s`
      );
    }
  }
}
