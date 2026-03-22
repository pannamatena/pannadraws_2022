import * as React from 'react';
import ReactPixel from 'react-facebook-pixel';
import TextPage from '../components/TextPage';

export function TermsAndLicencing() {
  return (
    <div>
      {ReactPixel.pageView()}
      <TextPage>
        <h1>Terms of Service: Original Artwork & Licensing</h1>
        <p>Artist: Panna Zsamba</p>
        <p>Date: 22 March 2026</p>
        <h4>1. The Commission Process</h4>
        <p>
          <strong>Retainer:</strong>{' '}
          <strong>A 50% non-refundable deposit is required</strong> to begin
          work and secure materials.
        </p>
        <p>
          <strong>Final Payment:</strong> The remaining 50% balance (plus
          shipping) is due upon completion of the physical painting.
        </p>
        <p>
          <strong>Payment Method:</strong> All transactions are handled through
          Etsy custom listings.
        </p>
        <h4>2. Physical vs. Digital Delivery</h4>
        <p>
          <strong>Physical Artwork:</strong> Upon final payment, the Client
          receives the original hand-painted watercolor/mixed-media artwork.
        </p>
        <p>
          <strong>Digital Licensing:</strong> For commercial, pitch, or
          publication projects, a high-resolution professional scan (300+ DPI)
          will be provided.{' '}
          <strong>
            Licensing rights only apply to the digital file and its
            reproduction.
          </strong>
        </p>
        <p>
          <strong>Shipping:</strong> The Client is responsible for all shipping,
          insurance, and tracking costs for the physical artwork. The Artist is
          not responsible for delays or damages caused by the carrier.
        </p>
        <h4>3. Intellectual Property & Licensing</h4>
        <p>
          My studio operates on a Licensing Model. I do not offer full copyright
          transfers or "Work-for-Hire" agreements.
        </p>
        <p>
          <strong>Physical Ownership:</strong> The Client owns the physical
          piece of art for private display.
        </p>
        <p>
          <strong>Reproduction Rights:</strong> Ownership of the physical
          painting does not include the right to scan, print, or reproduce the
          image for profit. Reproduction rights are granted only through a
          Digital License provided by the Artist.
        </p>
        <p>
          <strong>Standard Commercial License:</strong> Grants the Client the
          right to use the provided digital scan for the specific project (e.g.,
          book cover, pitch deck).
        </p>
        <p>
          <strong>Exclusive Commercial License:</strong> If specified in the
          contract, the Artist grants the Client exclusive use of the image. The
          Artist will not sell prints or re-license the work to others.
        </p>
        <p>
          <strong>Authorship:</strong> The Artist retains the copyright to the
          image and the right to use the scan for portfolio, social media (both
          Standard and Exclusive Licensing), and the sale of independent art
          prints (Standard Licensing). The Client retains all rights to their
          original story and characters.
        </p>
        <h4>4. Traditional Workflow & Revisions</h4>
        <p>
          Because this is traditional media (watercolor/mixed media), the
          process differs from digital art:
        </p>
        <p>
          <strong>The Sketch Phase:</strong> Revisions are unlimited during the
          pencil sketch phase. This is the "Point of No Return."
        </p>
        <p>
          <strong>Final Drawing Phase:</strong> Once the Client approves the
          sketch and the Artist begins drawing, no major compositional changes
          can be made. The Artist allows 1-2 small, non-compositional revisions.
        </p>
        <p>
          <strong>Outlines & Painting Phase:</strong> The Artist's style
          involves the use of clean, permanent pen outlines. This is the "Point
          of No Return."
        </p>
        <p>
          <strong>Post-Painting:</strong> Only minor digital color corrections
          can be made to the scan. Physical changes to the painting after
          completion will require a new commission fee.
        </p>
        <h4>5. Cancellation (Kill Fees)</h4>
        <p>
          If a project is cancelled after or during the sketch phase but before
          painting begins, the Artist retains the 50% deposit. If cancelled
          after the painting has begun, the full balance is due to cover
          specialized materials and time spent on the physical piece.
        </p>
      </TextPage>
    </div>
  );
}
