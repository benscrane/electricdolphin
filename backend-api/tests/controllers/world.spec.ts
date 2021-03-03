import 'jest';
import { world } from '../../src/controllers';
import { mockRequest, mockResponse, mockNext } from '../testHelpers';


describe('Module: World Controllers', () => {

    describe('Controller: world', () => {
        it('should respond hello world', async () => {
            const request = mockRequest();
            const response = mockResponse();
            await world(request, response, mockNext);
            expect(response.send).toHaveBeenCalled();
            expect(response.send).toHaveBeenCalledWith('Hello world!');
        });
    });
});
