import { promises as fs } from 'fs';
import * as path from 'path';

// TODO: Define a City class with name and id properties
class City {

}

const filePath = path.join(__dirname, 'searchHistory.json');
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      const err = error as NodeJS.ErrnoException; // this let's typescript know that error is not an unknown type
      if (err.code === 'ENOENT') { // catch case for error no entry to return an empty array
        return [];
      } else {
        throw err;
      }
    }
  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: City[]) {
    try {
      await fs.writeFile(filePath, JSON.stringify(cities, null, 2), 'utf-8');
    } catch (error) {
      throw error;
    }
  }

  async getCities(): Promise<City[]> {
    return await this.read();
  }

  async addCity(city: City) {
    const cities = await this.getCities();
    cities.push(city);
    await this.write(cities);
  }

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
