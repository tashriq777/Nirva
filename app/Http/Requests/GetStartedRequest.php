<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class GetStartedRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $services = collect(config('nirva.services'))->pluck('name')->all();
        $options = config('nirva.getStarted');

        return [
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:190'],
            'company' => ['required', 'string', 'max:190'],
            'company_size' => ['required', 'string', Rule::in($options['companySizes'])],
            'services' => ['required', 'array', 'min:1'],
            'services.*' => ['string', Rule::in($services)],
            'pain_point' => ['required', 'string', Rule::in($options['painPoints'])],
            'budget' => ['nullable', 'string', Rule::in($options['budgets'])],
            'timeline' => ['required', 'string', Rule::in($options['timelines'])],
            'message' => ['nullable', 'string', 'max:5000'],
        ];
    }
}
