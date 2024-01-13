
enum FsMode {
    OUT = 'out',
    IN = 'in'
}

enum GPIOValue {
    LOW = '0',
    HIGH = '1'
}
class Fs {
    private static GPIO_EXPORT: string = '/sys/class/gpio/export';
    private static GPIO_UNEXPORT: string = '/sys/class/gpio/unexport';

    static exportGpio(gpio: number) {
        var exportFs = Bun.file(this.GPIO_EXPORT);
        Bun.write(exportFs, gpio.toString());
    }

    static unexportGpio(gpio: number) {
        var unexportFs = Bun.file(this.GPIO_UNEXPORT);
        Bun.write(unexportFs, gpio.toString());
    }

    static setGpioDirection(gpio: number, direction: FsMode) {
        var gpioFs = Bun.file('/sys/class/gpio/gpio' + gpio + '/direction');
        Bun.write(gpioFs, direction.toString());
    }

    static setGpioValue(gpio: number, value: GPIOValue) {
        var gpioFs = Bun.file('/sys/class/gpio/gpio' + gpio + '/value');
        Bun.write(gpioFs, value.toString());
    }

    static getGpioValue(gpio: number): Promise<string> {
        var gpioFs = Bun.file('/sys/class/gpio/gpio' + gpio + '/value');
        return gpioFs.text();
    }

    static setGpioEdge(gpio: number, edge: string) {
        var gpioFs = Bun.file('/sys/class/gpio/gpio' + gpio + '/edge');
        Bun.write(gpioFs, edge);
    }

    static getGpioEdge(gpio: number): Promise<string> {
        var gpioFs = Bun.file('/sys/class/gpio/gpio' + gpio + '/edge');
        return gpioFs.text();
    }

    static getGpioActiveLow(gpio: number): Promise<string> {
        var gpioFs = Bun.file('/sys/class/gpio/gpio' + gpio + '/active_low');
        return gpioFs.text();
    }

    static setGpioActiveLow(gpio: number, value: string) {
        var gpioFs = Bun.file('/sys/class/gpio/gpio' + gpio + '/active_low');
        Bun.write(gpioFs, value);
    }

    static getGpioDirection(gpio: number): Promise<string> {
        var gpioFs = Bun.file('/sys/class/gpio/gpio' + gpio + '/direction');
        return gpioFs.text();
    }

}