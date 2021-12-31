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
    it('Should return a message "There is no links!"', async () => {
        const result = await getFile('../arquivos/texto1_semLink.md')
        expect(result).toBe('There is no links!')
    })
})