import 'jest';
import { healthCheck } from '../../src/controllers';
import { mockRequest, mockResponse, mockNext } from '../testHelpers';

describe('Module: Health Check Controller', () => {
    describe('Controller: healthCheck', () => {
        it('should respond with 200', async () => {
            const request = mockRequest();
            const response = mockResponse();
            await healthCheck(request, response, mockNext);
            expect(response.status).toHaveBeenCalledWith(200);
        });
    });
});
