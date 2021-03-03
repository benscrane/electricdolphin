import 'jest';
import * as health from '../../src/controllers/health';
import { mockRequest, mockResponse, mockNext } from '../testHelpers';

describe('Module: health controllers', () => {
    describe('Controller: healthCheck', () => {
        it('should respond with 200', async () => {
            const request = mockRequest();
            const response = mockResponse();
            await health.healthCheck(request, response, mockNext);
            expect(response.status).toHaveBeenCalledWith(200);
            expect(response.send).toHaveBeenCalled();
        });
    });
});
