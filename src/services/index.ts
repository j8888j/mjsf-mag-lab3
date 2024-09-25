import { CategoriesService } from "@/services/categories.service";
import { UserService } from "@/services/user.service";
import { ProductService } from "@/services/product.service";

import httpClient from "@/utils/http-client";


class ServiceProvider {
    /**
     * Service instances
     */
    serviceInstances: Record<string, any> = {};

    /**
     * Get CategoriesService
     */
    getCategoriesService(): CategoriesService {
        if (!this.serviceInstances.categoriesService) {
            this.serviceInstances.categoriesService = new CategoriesService(httpClient);
        }
        return this.serviceInstances.categoriesService;
    }

    /**
     * Get ProductsService
     */
    getProductsService(): ProductService {
        if (!this.serviceInstances.productsService) {
            this.serviceInstances.productsService = new ProductService(httpClient);
        }
        return this.serviceInstances.productsService;
    }

    /**
     * Get UserService
     */
    getUserService(): UserService {
        if (!this.serviceInstances.UserService) {
            this.serviceInstances.UserService = new UserService(httpClient);
        }
        return this.serviceInstances.UserService;
    }

    /**
     * Set service instance
     * @param serviceName
     * @param serviceInstance
     */
    setServiceInstance(serviceName: string, serviceInstance: any): void {
        this.serviceInstances[serviceName] = serviceInstance;
    }

    /**
     * Check if service instance exists
     * @param serviceName
     */
    hasServiceInstance(serviceName: string): boolean {
        return !!this.serviceInstances[serviceName];
    }
}

const serviceProvider: ServiceProvider = new ServiceProvider();
export default serviceProvider;
