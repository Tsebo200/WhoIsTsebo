import Form from 'react-bootstrap/Form';
import styles from '../CheckExample/CheckExample.module.scss'

function CheckExample() {
  return (
    <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className={styles.checkbox}>
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            // label={`default ${type}`}
          />

          {/* <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          /> */}
        </div>
      ))}
    </Form>
  );
}

export default CheckExample;