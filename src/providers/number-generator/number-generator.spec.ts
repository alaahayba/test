console.log("number generator test");

import { NumberGeneratorProvider } from './number-generator';
import {} from 'jasmine';



let numberGenerator = null;

describe('Number Generator Service', () => {

   beforeEach(() => {
       numberGenerator = new NumberGeneratorProvider();
   });

   it('1-should say hello', () => {
           
           let result = numberGenerator.hello("alaa");
           expect(result).toContain("alaa");
       }
   );
   

   it('2- should return a random number', () => {
           
           let result = numberGenerator.getRandomInt(5,10);
            expect(result).toBeGreaterThan(4);
       }
   );

    it('3- should return sum of 2 numbers', () => {
           
           let result = numberGenerator.add(3,4);
           expect(result).toBe(7);
       }
   );

      it('4-should return true if number is odd', () => {
           
           let result = numberGenerator.is_odd(5);
           expect(result).toBe(true);

           result=numberGenerator.is_odd(8);
           expect(result).toBe(false);

           result=numberGenerator.is_odd('8');
           expect(result).toBe(false);
       }
   );

   it('test char', () => {
          
           let result=numberGenerator.add('5','9')
        
           expect(result).toBe(20);
       }
   );

});