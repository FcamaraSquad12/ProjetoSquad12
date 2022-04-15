import React from "react";

function AlertWarning({header, msg}) {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{header}</Alert.Heading>
          <p>
            {msg}
          </p>
        </Alert>
      );
    }
  }
  
  render(<AlertWarning />);