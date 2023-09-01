// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mocks/server.js";

beforeAll(() => server.listen()); // 서버 설정

afterEach(() => server.resetHandlers()); // 각각 테스트 요청 마다 핸들러 초기화

afterAll(() => server.close());
