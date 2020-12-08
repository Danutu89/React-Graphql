/**
 *
 * LoginModal
 *
 */
import React, { memo, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Form, Button, ButtonToolbar } from 'rsuite';
import { FormInputField } from '../FormInputField';
import { messages } from './messages';

interface Props {
  trigger: ReactElement;
}

export const LoginModal = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { trigger } = props;
  const { useState } = React;

  const [open, setOpen] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const errorMessage = errorVisible ? 'Error' : undefined;
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = () => {
    console.log(data);
    //logIn({ variables: { ...data } });
  };

  return (
    <>
      {React.cloneElement(trigger, {
        onClick: () => {
          setOpen(true);
        },
      })}

      <Modal
        size="xs"
        show={open}
        onHide={() => {
          setOpen(false);
        }}
      >
        <div style={{ display: 'flex' }}>
          <Form
            style={{ margin: 'auto' }}
            onChange={formValue => {
              setData(prevState => ({ ...prevState, ...formValue }));
            }}
          >
            <FormInputField
              name="username"
              label="Username"
              errorMessage={errorMessage}
            />
            <FormInputField
              name="password"
              label="Password"
              type="password"
              errorMessage={errorMessage}
            />

            <ButtonToolbar>
              <Button
                style={{ marginInlineEnd: 'auto' }}
                appearance="primary"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </ButtonToolbar>
          </Form>
        </div>
      </Modal>
    </>
  );
});
