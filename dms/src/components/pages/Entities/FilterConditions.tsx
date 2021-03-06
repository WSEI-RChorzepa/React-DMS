import React, { useState } from "react";
import toastr from "toastr";
import { Flex } from "components/common";
import { Button, Select, Input } from "components";
import { Type, Field, Operator, IFilter } from "./types";
import { ConditionFilter } from "./Tasks/components";
import { FaPlus, FaTimes } from "./Icons";
import { useEntitiesContext } from "./context";

const FilterConditions: React.FunctionComponent = () => {
  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [conditions, setConditions] = useState<IFilter[]>([]);
  const { showFilterConditions } = useEntitiesContext();

  const addConditions = () => {
    if (selectedType === null) {
      toastr.info("Please select one of the available filter conditions.");
      return;
    }

    setConditions((oldState) => {
      return [
        ...oldState.filter((a) => a !== undefined),
        {
          index: conditions.length++,
          type: selectedType,
          field: Field.Company,
          operator: Operator.Contains,
        },
      ];
    });
  };

  const removeCondition = (index: number) => {
    setConditions(conditions.filter((a) => a.index !== index));
  };

  return (
    <>
      {showFilterConditions && (
        <ConditionFilter.StyledCard>
          <p>Rows are filtered by the following conditions starting fromthe top</p>
          <ConditionFilter.Wrapper>
            {conditions.length
              ? conditions.map((c) => (
                  <ConditionFilter.ConditionsWrapper key={c.index} direction="row" justifyContent="flex-start" alignItems="center">
                    <Button onClick={() => removeCondition(c.index)}>
                      <FaTimes /> {c.type}
                    </Button>
                    <Select defaultValue={c.field}>
                      {Array.from(Object.keys(Field)).map((key) => (
                        <option key={key} value={key}>
                          {key}
                        </option>
                      ))}
                    </Select>
                    <Select defaultValue={c.operator}>
                      {Array.from(Object.keys(Operator)).map((key) => (
                        <option key={key} value={key}>
                          {key}
                        </option>
                      ))}
                    </Select>
                    <Input placeholder="Type" />
                  </ConditionFilter.ConditionsWrapper>
                ))
              : ""}
          </ConditionFilter.Wrapper>
          <Flex direction="row" justifyContent="flex-start" alignItems="center">
            <Button onClick={addConditions}>
              <FaPlus /> Add filter
            </Button>
            <Select defaultValue={"DEFAULT"} onChange={(e) => setSelectedType(e.target.value as Type)}>
              <option value="DEFAULT" disabled>
                chose option
              </option>
              {Array.from(Object.keys(Type)).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </Select>
          </Flex>
        </ConditionFilter.StyledCard>
      )}
    </>
  );
};

export default FilterConditions;
