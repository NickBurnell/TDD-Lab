describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
        // Arrange
        const changeHandler = new ChangeHandler(5);
        // Act

        // Assert
        expect(changeHandler.amountDue).toBe(5);
    });
    it("initializes cashTendered to 0", function() {
        const changeHandler = new ChangeHandler({
            cashTendered: 0
        });
        expect(changeHandler.cashTendered).toBe(0);
    });

    // Insert coin tests
    it("insert quarter adds 25", function() {
        const changeHandler = new ChangeHandler({
            cashTendered: 0
        });
        changeHandler.insertCoin('quarter');
        expect(changeHandler.cashTendered).toBe(25);
    });

    it("insert dime adds 10", function() {
        const changeHandler = new ChangeHandler({
            cashTendered: 0
        });
        changeHandler.insertCoin('dime');
        expect(changeHandler.cashTendered).toBe(10);
    });

    it("insert nickel adds 5", function() {
        const changeHandler = new ChangeHandler({
            cashTendered: 0
        });
        changeHandler.insertCoin('nickle');
        expect(changeHandler.cashTendered).toBe(5);
    });

    it("insert penny adds 1", function() {
        const changeHandler = new ChangeHandler({
            cashTendered: 0
        });
        changeHandler.insertCoin('penny');
        expect(changeHandler.cashTendered).toBe(1);
    });

    it("subsequent coins continue to add value", function() {
        const changeHandler = new ChangeHandler({
            cashTendered: 0
        });
        changeHandler.insertCoin('quarter');
        changeHandler.insertCoin('quarter');
        changeHandler.insertCoin('quarter');
        expect(changeHandler.cashTendered).toBe(75);
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
        const changeHandler = new ChangeHandler(25);
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        expect(changeHandler.isPaymentSufficient()).toBe(true);
    });

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
        const changeHandler = new ChangeHandler(25);
        changeHandler.insertCoin("dime");
        expect(changeHandler.isPaymentSufficient()).toBe(false);
    });
    
    it("isPaymentSufficient returns true when exact cashTendered", function() {
        const changeHandler = new ChangeHandler(25);
        changeHandler.insertCoin("quarter");
        expect(changeHandler.isPaymentSufficient()).toBe(true);
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
        const changeHandler = new ChangeHandler(75);
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        changeHandler.insertCoin("quarter");
        expect(changeHandler.giveChange()).toBe(0);
        
    });

    it("giveChange returns correct coins for 10", function() {
        
    });

    it("giveChange returns correct coins for 27", function() {
        
    });

    it("giveChange returns correct coins for 68", function() {
        
    });

    it("giveChange returns correct coins for 15", function() {
        
    });

    it("giveChange returns correct coins for 2", function() {
        
    });

});