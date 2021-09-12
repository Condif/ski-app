
import userEvent from '@testing-library/user-event';
import { render, screen } from "../../custom-render";
import SkiLengthForm from './Form';

describe('SkiLengthForm', () => {
    test('calls the onChange callback handler', async () => {
      const handleChangeName = jest.fn();
   
     
      render(
        <SkiLengthForm name="" handleChangeName={handleChangeName}>
        </SkiLengthForm>
      );
   
      await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
   
      expect(handleChangeName).toHaveBeenCalledTimes(10);
    });
  });