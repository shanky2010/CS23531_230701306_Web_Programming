import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from '../store';
import Login from '../Components/Login';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Register from '../Components/Register';
import ErrorPage from '../Components/ErrorPage';
import MobilesList from '../Buyer/MobilesList';
import SellerMobiles from '../Seller/SellerMobiles';
import CreateMobile from '../Seller/CreateMobile';


jest.mock('axios');

// Setup QueryClient
const queryClient = new QueryClient();

describe('Login Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderLoginComponent = (props = {}) => {
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Login {...props} />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
  };

  
  test('frontend_login_component_renders_the_with_login_heading', () => {
    renderLoginComponent();

  
    const loginHeadings = screen.getAllByText(/Login/i);
    expect(loginHeadings.length).toBeGreaterThan(0);

  });


  test('frontend_login_component_displays_validation_messages_when_login_button_is_clicked_with_empty_fields', async () => {
    renderLoginComponent();
  
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
  
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });
   
});

describe('Register Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderRegisterComponent = (props = {}) => {
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Register {...props} />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
  };

  test('frontend_register_component_renders_with_create_account_heading', () => {
    renderRegisterComponent();

    const createAccountHeading = screen.getByText('Create Your Account');
    expect(createAccountHeading).toBeInTheDocument();
  });

  test('frontend_register_component_displays_validation_messages_when_register_button_is_clicked_with_empty_fields', () => {
    renderRegisterComponent();

    fireEvent.click(screen.getByRole('button', { name: /Register/i }));

    expect(screen.getByText('First Name is required')).toBeInTheDocument();
    expect(screen.getByText('Last Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Mobile Number is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
    expect(screen.getByText('Confirm Password is required')).toBeInTheDocument();
  });


});

describe('ErrorPage Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const renderErrorComponent = (props = {}) => {
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ErrorPage {...props} />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
  };
  test('frontend_errorpage_component_renders_with_error_heading', () => {
    renderErrorComponent();
    const headingElement = screen.getByText(/Something Went Wrong/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('frontend_errorpage_component_renders_with_error_content', () => {
    renderErrorComponent();
    const paragraphElement = screen.getByText(/We're sorry, but an error occurred. Please try again later./i);
    expect(paragraphElement).toBeInTheDocument();
  });
});


describe('MobilesList Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderMobilesListComponent = (props = {}) => {
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <MobilesList {...props} />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
  };

  test('frontend_mobileslist_component_renders_with_available_mobiles_heading', () => {
    renderMobilesListComponent();

    const headingElement = screen.getByText('Available Mobiles');
    expect(headingElement).toBeInTheDocument();
  });

  test('frontend_mobileslist_component_renders_logout_button', () => {
    renderMobilesListComponent();

    const logoutButton = screen.getByRole('button', { name: /Logout/i });
    expect(logoutButton).toBeInTheDocument();
  });

  test('frontend_mobileslist_component_renders_table_headers', () => {
    renderMobilesListComponent();

    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('Model')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

});

describe('SellerMobiles Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderSellerMobilesComponent = (props = {}) => {
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <SellerMobiles {...props} />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
  };

  test('frontend_sellermobiles_component_renders_with_mymobiles_logo', () => {
    renderSellerMobilesComponent();

    const logoElement = screen.getByText('MyMobiles');
    expect(logoElement).toBeInTheDocument();
  });

  test('frontend_sellermobiles_component_renders_navigation_buttons', () => {
    renderSellerMobilesComponent();

    const addMobileButton = screen.getByRole('button', { name: /Add Mobile/i });
    const logoutButton = screen.getByRole('button', { name: /Logout/i });
    
    expect(addMobileButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  test('frontend_sellermobiles_component_renders_search_and_sort_functionality', () => {
    renderSellerMobilesComponent();

    const searchInput = screen.getByPlaceholderText('Search by brand or model');
    const sortLabel = screen.getByText('Sort by Price:');
    
    expect(searchInput).toBeInTheDocument();
    expect(sortLabel).toBeInTheDocument();
  });
});

describe('CreateMobile Component', () => {
  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = {
      getItem: jest.fn((key) => {
        if (key === 'editId') return '';
        return null;
      }),
      setItem: jest.fn(),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderCreateMobileComponent = (props = {}) => {
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <CreateMobile {...props} />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
  };

  test('frontend_createmobile_component_renders_with_add_mobile_heading', () => {
    renderCreateMobileComponent();

    const headingElement = screen.getByText('Add New Mobile');
    expect(headingElement).toBeInTheDocument();
  });

  test('frontend_createmobile_component_renders_all_form_fields', () => {
    renderCreateMobileComponent();

    expect(screen.getByLabelText('Brand:')).toBeInTheDocument();
    expect(screen.getByLabelText('Model:')).toBeInTheDocument();
    expect(screen.getByLabelText('Price:')).toBeInTheDocument();
    expect(screen.getByLabelText('Description:')).toBeInTheDocument();
    expect(screen.getByLabelText('Available Quantity:')).toBeInTheDocument();
  });

  test('frontend_createmobile_component_displays_validation_errors_on_empty_submit', () => {
    renderCreateMobileComponent();

    const submitButton = screen.getByRole('button', { name: /Add Mobile/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Brand is required')).toBeInTheDocument();
    expect(screen.getByText('Model is required')).toBeInTheDocument();
    expect(screen.getByText('Price is required')).toBeInTheDocument();
    expect(screen.getByText('Quantity is required')).toBeInTheDocument();
    expect(screen.getByText('Description is required')).toBeInTheDocument();
  });
});