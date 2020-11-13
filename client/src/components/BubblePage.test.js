import React from "react";
import { render, screen, wait } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchData as mockFetchData } from '../api/fetchData';
jest.mock('../api/fetchData.js')

test("Fetches data and renders the bubbles", () => {
  // Finish this test

  mockFetchData.mockResolvedValueOnce({
    data:[
      {color: 'newcolor', id:1},
      {color: 'newcolor2', id:2}
    ]
  })

  render(<BubblePage/>)

  expect(mockFetchData).toHaveBeenCalledTimes(1);
  expect(mockFetchData).toHaveBeenCalledWith();




});
