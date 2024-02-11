import MergeFunction from './ts';

describe('MergeFunction', () => {
    it('should merge sorted collections correctly', () => {
        // const collection1 = [1, 3, 4, 5];
        // const collection2 = [2, 5, 7, 7];
        // const collection3 = [9, 5, 3, 1];
        const collection1 = [1,2,3,9,10];
        const collection2 = [4,5,6,10,11];
        const collection3 = [7,3,2];
  
      const merged = MergeFunction.merge(collection1, collection2, collection3);
      console.log(merged);
    //   expect(merged).toEqual([1,1,2,3,3,4,5,5,5,7,7,9]);
      expect(merged).toEqual([1,2,2,3,3,4,5,6,7,9,10,10,11]);
    });
  
    // Add more test cases to cover various scenarios
});