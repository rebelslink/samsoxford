import requests
import sys
from datetime import datetime

class BasicAPITester:
    def __init__(self, base_url="https://phones-tobacco-shop.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.content:
                    try:
                        print(f"Response: {response.json()}")
                    except:
                        print(f"Response: {response.text[:200]}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}")

            return success, response.json() if success and response.content else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

def main():
    """Test basic backend health endpoints"""
    tester = BasicAPITester()
    
    print("🚀 Testing Sam's Phones & Tobacco Backend APIs")
    print("=" * 50)
    
    # Test basic health endpoint
    tester.run_test(
        "Root Endpoint Health Check",
        "GET", 
        "/api/",
        200
    )
    
    # Test status endpoint (GET)
    tester.run_test(
        "Get Status Checks",
        "GET",
        "/api/status", 
        200
    )
    
    # Test status creation (POST)
    test_data = {
        "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
    }
    tester.run_test(
        "Create Status Check",
        "POST",
        "/api/status",
        200,
        data=test_data
    )

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Backend Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("✅ All backend tests passed!")
        return 0
    else:
        print("❌ Some backend tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())