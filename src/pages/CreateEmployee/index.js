import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { states } from "../../datas/states";
import { department } from "../../datas/department";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../store/slices/employeeSlice";

import { Modal } from "hrnet-react-modal-component";
import { redirect } from "react-router-dom";
import styled from "styled-components";
import InputBlueprint from "../../components/InputBlueprint/InputBlueprint";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [modalSwitch, setModalSwitch] = useState(false);

  // useForm()
  const { register, formState, handleSubmit, reset } = useForm({
    defaultValues: {
      startDate: null,
      dateOfBirth: null,
    },
  });

  const toggleModal = () => setModalSwitch(!modalSwitch);
  const delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const onSubmit = (data) => {
    dispatch(createEmployee(data));
    toggleModal();

    delay(3000).then(() => window.location.reload(false));
  };

  return (
    <Employee>
      <h2>Create Employee</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* person */}
        <section>
          <Wrapper>
            <InputBlueprint
              label="Firstname"
              name="firstName"
              inputType="input"
              formState={formState}
              register={register("firstName", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <InputBlueprint
              label="Lastname"
              name="lastName"
              inputType="input"
              formState={formState}
              register={register("lastName", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <InputBlueprint
              label="Birthday"
              name="dateOfBirth"
              inputType="date"
              formState={formState}
              register={register("dateOfBirth", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <InputBlueprint
              label="Start date"
              name="startDate"
              inputType="date"
              formState={formState}
              register={register("startDate", { required: true })}
            />
          </Wrapper>
        </section>

        {/* address */}
        <section>
          <Wrapper>
            <InputBlueprint
              label="Street"
              name="street"
              inputType="input"
              formState={formState}
              register={register("street", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <InputBlueprint
              label="City"
              name="city"
              inputType="input"
              formState={formState}
              register={register("city", { required: true })}
            />
          </Wrapper>

          <Wrapper>
            <InputBlueprint
              label="State"
              name="state"
              options={states}
              inputType="select"
              formState={formState}
              register={register("state")}
            />
          </Wrapper>

          <Wrapper>
            <InputBlueprint
              label="Zipcode"
              name="zipcode"
              inputType="number"
              formState={formState}
              register={register("zipCode", { required: true })}
            />
          </Wrapper>
        </section>

        <section>
          <Wrapper>
            <InputBlueprint
              label="Department"
              name="department"
              options={department}
              inputType="select"
              formState={formState}
              register={register("department")}
            />
          </Wrapper>
        </section>

        <Modal modalStatus={modalSwitch} onConfirm={toggleModal} />

        <button className="button" type="submit">
          Create Employee
        </button>
      </form>
    </Employee>
  );
};

export default CreateEmployee;

const Employee = styled.div`
  font-family: "Montserrat", "Roboto", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #62711b;
  font-size: 18px;

  @media (max-width: 425px) {
    width: auto;
  }

  h2 {
    font-size: 25px;
    @media (max-width: 425px) {
      font-size: 16px;
    }
  }

  select {
    font-family: "Montserrat", "Roboto", sans-serif;
    font-size: 18px;
    width: 18rem;
    height: 2rem;
    border: 2px solid #62711b;
    border-radius: 0.3rem;
    color: #000;
    font-size: 16px;
    margin: 3px 0;
    box-sizing: border-box;

    @media (max-width: 425px) {
      font-size: 14px;
    }
  }

  .button {
    margin-top: 1rem;
    background-color: #6d7e1e;
    color: #ffffff;
    padding: 0.7rem;
    border-radius: 5px;
    font-family: "Montserrat", "Roboto", sans-serif;
    font-size: 18px;
    @media (max-width: 850px) {
      font-size: 16px;
    }
    @media (max-width: 425px) {
      font-size: 14px;
      padding: 0.45rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background-color: white;
    font-family: "Montserrat", "Roboto", sans-serif;
    width: 18rem;
    height: 2rem;
    border: 2px solid #62711b;
    border-radius: 0.3rem;
    color: #000;
    font-size: 16px;
    margin: 3px 0;
    box-sizing: border-box;

    @media (max-width: 425px) {
      font-size: 14px;
    }
    @media (max-width: 850px) {
      font-size: 16px;
    }

    &:focus-visible {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: grey;
    }

    &::-moz-placeholder {
      color: grey;
    }

    &:-ms-input-placeholder {
      color: grey;
    }

    &::-ms-input-placeholder {
      color: grey;
    }

    &::placeholder {
      color: grey;
    }
  }

  .invalid {
    border: 1.5px solid red;
  }
  .valid {
    border: 2px solid #62711b;
  }
`;
