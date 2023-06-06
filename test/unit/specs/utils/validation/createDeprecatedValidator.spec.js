/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { objectOf, string } from "../../../../../src/utils/validation";
import describeValidation from "../../../helpers/describeValidation";

describe("validation::deprecated", () => {
  const testCases = [
    { value: { old: "a", new: "a" }, expected: { new: "a" }, warning: true },
    { value: { old: "a" }, expected: { new: "a" }, warning: true },
    { value: { new: "a" } },
    { value: { old: "a", new: "b" }, error: true }
  ];

  describeValidation(
    "deprecated first",
    objectOf({
      old: string().deprecated("new"),
      new: string().required()
    }),
    testCases
  );

  describeValidation(
    "deprecated last",
    objectOf({
      new: string().required(),
      old: string().deprecated("new")
    }),
    testCases
  );
});
