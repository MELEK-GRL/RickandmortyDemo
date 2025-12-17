'use client';

import { parseAsString, useQueryState } from 'nuqs';

import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const StatusOptionsData = [
    { value: 'all', label: 'All Status' },
    { value: 'alive', label: 'Alive' },
    { value: 'dead', label: 'Dead' },
    { value: 'unknown', label: 'Unknown' },
] as const;

const GenderOptionsData = [
    { value: 'all', label: 'All Gender' },
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'genderless', label: 'Genderless' },
    { value: 'unknown', label: 'Unknown' },
] as const;

export default function Filter() {
    const [status, setStatus] = useQueryState(
        'status',
        parseAsString.withOptions({ shallow: false }),
    );

    const [gender, setGender] = useQueryState(
        'gender',
        parseAsString.withOptions({ shallow: false }),
    );

    const statusValue = status ?? 'all';
    const genderValue = gender ?? 'all';

    const statusLabel =
        StatusOptionsData.find((o) => o.value === statusValue)?.label ??
        'All Status';
    const genderLabel =
        GenderOptionsData.find((o) => o.value === genderValue)?.label ??
        'All Gender';

    const clearAll = () => {
        void setStatus(null);
        void setGender(null);
    };

    return (
        <div className="relative z-50 mt-3 rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-950">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2">
                        <Select
                            value={statusValue}
                            onValueChange={(v) => void setStatus(v === 'all' ? null : v)}
                        >
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="All Status" />
                            </SelectTrigger>

                            <SelectContent className="z-50 bg-white">
                                {StatusOptionsData.map((o) => (
                                    <SelectItem key={o.value} value={o.value}>
                                        {o.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center gap-2">
                        <Select
                            value={genderValue}
                            onValueChange={(v) => void setGender(v === 'all' ? null : v)}
                        >
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="All Gender" />
                            </SelectTrigger>

                            <SelectContent className="z-50 bg-white">
                                {GenderOptionsData.map((o) => (
                                    <SelectItem key={o.value} value={o.value}>
                                        {o.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        className="h-9 bg-blue-500 text-white hover:bg-blue-600"
                        onClick={clearAll}
                    >
                        Temizle
                    </Button>
                </div>
            </div>
        </div>
    );
}
