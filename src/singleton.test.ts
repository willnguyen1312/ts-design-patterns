class Singleton {
  private static instance: Singleton

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}

test("Singleton should work as expected", () => {
  const instance1 = Singleton.getInstance()
  const instance2 = Singleton.getInstance()

  expect(instance1).toBe(instance2)
})
