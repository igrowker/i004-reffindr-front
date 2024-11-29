import { getProperties } from '@/services/propertyService'
import { Property } from '@/types'

export const propertyLoader = async () => {
  try {
    const properties: Property[] = await getProperties()
    return properties
  } catch (error) {
    console.error('Error loading properties:', error)
    throw error
  }
}
