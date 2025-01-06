import React, { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface FormData {
  name: string;
  phone: string;
  address: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const Checkout = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' }); // Clear error for this field
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    const { name, phone, address, cardNumber, expiryDate, cvv } = formData;

    if (!name) newErrors.name = 'Name is required.';
    if (!phone || phone.length !== 10 || isNaN(Number(phone)))
      newErrors.phone = 'Enter a valid 10-digit phone number.';
    if (!address) newErrors.address = 'Address is required.';
    if (!cardNumber || cardNumber.length !== 16 || isNaN(Number(cardNumber)))
      newErrors.cardNumber = 'Enter a valid 16-digit credit card number.';
    if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate))
      newErrors.expiryDate = 'Enter expiry date in MM/YY format.';
    if (!cvv || cvv.length !== 3 || isNaN(Number(cvv)))
      newErrors.cvv = 'Enter a valid 3-digit CVV.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSuccessMessage('Your details have been submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });
      setErrors({});
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={[styles.input, errors.name && styles.inputError]}
        placeholder="Enter your name"
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={[styles.input, errors.phone && styles.inputError]}
        placeholder="Enter your phone number"
        keyboardType="numeric"
        maxLength={10}
        value={formData.phone}
        onChangeText={(value) => handleChange('phone', value)}
      />
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, errors.address && styles.inputError]}
        placeholder="Enter your address"
        multiline
        numberOfLines={4}
        value={formData.address}
        onChangeText={(value) => handleChange('address', value)}
      />
      {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

      <Text style={styles.label}>Credit Card Number</Text>
      <TextInput
        style={[styles.input, errors.cardNumber && styles.inputError]}
        placeholder="Enter your credit card number"
        keyboardType="numeric"
        maxLength={16}
        value={formData.cardNumber}
        onChangeText={(value) => handleChange('cardNumber', value)}
      />
      {errors.cardNumber && (
        <Text style={styles.errorText}>{errors.cardNumber}</Text>
      )}

      <Text style={styles.label}>Expiry Date (MM/YY)</Text>
      <TextInput
        style={[styles.input, errors.expiryDate && styles.inputError]}
        placeholder="MM/YY"
        keyboardType="numeric"
        maxLength={5}
        value={formData.expiryDate}
        onChangeText={(value) => handleChange('expiryDate', value)}
      />
      {errors.expiryDate && (
        <Text style={styles.errorText}>{errors.expiryDate}</Text>
      )}

      <Text style={styles.label}>CVV</Text>
      <TextInput
        style={[styles.input, errors.cvv && styles.inputError]}
        placeholder="Enter CVV"
        keyboardType="numeric"
        maxLength={3}
        secureTextEntry
        value={formData.cvv}
        onChangeText={(value) => handleChange('cvv', value)}
      />
      {errors.cvv && <Text style={styles.errorText}>{errors.cvv}</Text>}

      {successMessage ? (
        <Text style={styles.successText}>{successMessage}</Text>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  successText: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Checkout;
