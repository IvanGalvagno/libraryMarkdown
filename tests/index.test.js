import { isTypedArray } from 'util/types';
import getFile from '../index';

const arrayResult = [
   { 
        FileList : 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
   }
]

describe('getFile::', () => {
    it('It should be a function', () => {
        expect(typeof getFile).toBe('function');
    })
    it('Should return a array non empty', async () => {
        const result = await getFile('../arquivos/texto1.md')
        expect(result).toEqual(arrayResult);
    })
})